#!/usr/bin/env ruby
require 'pp'
require 'erb'
require 'yaml'
require 'digest'
require 'optparse'

require './lib/paths'

def dbg(msg, str = '`')
  # return nil;
  puts(str * 9)
  puts msg
  puts(str * 9)
end

options = {}
OptionParser.new do |opts|
  opts.banner = 'Use it ok no do it rite rite now.'

  options[:dryrun] = false
  opts.on('-d', '--dryrun', 'Do everything without executing any of the tests') do
    options[:dryrun] = true
  end

  opts.on('-c', '--config CONFIG',
          'Specify the config from which to generate the test plan') do |cfg|
    c = Paths.join("#{cfg}.yaml.erb", :config)
    options[:config] = if File.exist?(c)
                         c
                       elsif File.exist?(cfg)
                         cfg
                       else
                         abort("No such config file found.\r\n" \
                               "Looking for '#{c}'\r\n" \
                              "or '#{cfg}'\r\n")
                       end
  end

  opts.on('-s', '--suite SUITE',
          'Specifies what to name the suite for this run.  Will override' \
          ' anything set in config.') do |s|
    options[:suite] = s
  end
end.parse!
# dbg(options, '+ - ')
OPTIONS = options
abort 'Can not run without specifying a config file' if options[:config].nil?

# @TODO rdoc
class TestSuiteInfo
  attr_reader :config
  attr_accessor :suite

  def initialize
    @config = load_config
    @project = set_project
    @suite = create_suite
    @name = nil # this is what we were thinking of as batch?
    @tests = create_tests
    @index = create_index
    save_config
    run_tests
  end

  def create_index
    # @indices = @tests.map { |t| t.index }
    @indices = @tests.map(&:index)
    render_index
  end

  def render_index
    # dbg('Suite rendering all index in indices:', '=* ')
    # @indices.each { |i| dbg(i, '- ') }
    report_index = File.open(File.join(@suite[:dir], 'not-the-index-yet.html'), 'w+')
    @indices.each { |i| report_index.write(i) }
    report_index.close
  end

  def load_config
    template = File.read(OPTIONS[:config])
    config = YAML.load(ERB.new(template).result)
  end

  # returns a hash with a name and a dir handle
  def set_project
    project = {}
    if @config[:project].nil?
      puts "no project defined in config, using default of 'default'"
      project[:name] = 'default'
    else
      project[:name] = @config[:project]
    end
    # dir = File.join($dirs[:projects], project[:name])
    dir = Paths.join(project[:name], :projects)
    Dir.mkdir(dir) unless File.exist?(dir)
    project[:dir] = dir
    project
  end

  # returns a hash with a name and dir handle
  def create_suite
    suite = {}
    # now is when we create the timestamp used for this suite
    suite[:timestamp] = Time.now.to_i.to_s
    dir = if OPTIONS[:suite]
            File.join(@project[:dir], OPTIONS[:suite])
          elsif @config[:suite][:name].nil?
            File.join(@project[:dir], suite[:timestamp])
          else
            File.join(@project[:dir], @config[:suite][:name])
          end
    abort "A suite with this name for this project (#{dir}) already exists-- quitting." if File.exist?(dir)
    Dir.mkdir(dir)
    suite[:dir] = dir
    suite
  end

  def save_config
    File.open(File.join(@suite[:dir], 'config.yaml'), 'w+') { |f| f.write(@config.to_yaml) }
  end

  def create_tests
    tests = []
    @config[:suite][:tests].each do |_test, data|
      tests << TestInfo.new(self, data)
    end
    tests
  end

  def run_tests
    q = JobQ.new(@suite[:dir])

    @tests.each do |t|
      q.add_job(name: t.name,
                cmd: t.command)
      next if t.render.nil?
      # assumes everything is just using a jmeter template, which for now, it is.
      q.add_job(name: "#{t.name}.render",
                cmd: t.render,
                postsleep: t.config[:postsleep] || 0)
    end
    q.run_jobs
  end
end

# @TODO rdoc
class TestInfo
  attr_accessor :config, :suite
  attr_reader :suite, :config, :timestamp,
              :name, :command, :jmx,
              :render

  def initialize(suite, config)
    @suite = suite
    @config = config
    @timestamp = Time.now.to_i.to_s
    ###
    # all this
    @jmx = parse_jmx(config[:template])
    jmxsha = Digest::SHA1.hexdigest(@jmx)
    @name = @config[:name] || "#{@timestamp}.#{jmxsha}"
    @dir = File.join(@suite.suite[:dir], @name)
    Dir.mkdir(@dir)
    save_jmx(@jmx)
    # should be factored out to separate
    ###
    @command = create_command
    @render = create_render
  end

  def index(template = 'default')
    template = Paths.join("#{template}.html.erb", :templates, :test_index)
    ERB.new(File.read(template)).result(binding)
  end

  def parse_jmx(template)
    tfile = Paths.join("#{template}.jmx.erb", :templates, :jmx)
    abort("Can't find template '#{tfile}', quitting.") unless File.exist?(tfile)
    template = File.read(tfile)
    jmx = YAML.load(ERB.new(template).result(binding))
    jmx
  end

  def save_jmx(jmx)
    File.open(File.join(@dir, "#{@name}.jmx"), 'w+') { |fi| fi.write(jmx) }
  end

  def create_command
    jmeter_bin = Paths.join('bin/jmeter', :jmeter)
    log = File.join(@dir, 'jmeter.log')
    output = File.join(@dir, 'output.csv')
    jmx_file = File.join(@dir, "#{@name}.jmx")
    "#{jmeter_bin} -n " \
    "-t=#{jmx_file} " \
    "-l=#{output} " \
    "-j=#{log}"
  end

  def create_render
    # totally sufficient for now, just not very flexible
    jmeter_bin = Paths.join('bin/jmeter', :jmeter)
    input = File.join(@dir, 'output.csv')
    "#{jmeter_bin} " \
    "-g=#{input} " \
    "-o=#{@dir}/graphs"
  end
end

# @TODO rdoc
class JobQ
  def initialize(suite_dir)
    @dir = suite_dir
    @file = File.join(@dir.to_s, 'jobq.yaml')
    dbg(@file, '~~~~~~~~~~')
    @queue = []
  end

  def add_job(job)
    @queue << { name: job[:name], cmd: job[:cmd], status: :queued, postsleep: job[:postsleep] }
    save_state
  end

  def save_state
    File.open(@file, 'w') { |f| f.write(@queue.to_yaml) }
  end

  def run_jobs
    # BEEDOO BEEDOOO
    @queue.each do |j|
      next unless j[:status] == :queued
      # @TODO bla bla, use popen3 to grab stdout & err
      # or just use a real bg job lib
      j[:started_at] = Time.now.to_i
      j[:status] = :running
      save_state

      if OPTIONS[:dryrun]
        puts "DRYRUN: #{j[:cmd]}"
      else
        puts "RUNNING #{j[:cmd]}"
        `#{j[:cmd]}`
      end

      j[:status] = :finished
      j[:finished_at] = Time.now.to_i
      j[:postsleep] ||= 0
      if (OPTIONS[:dryrun])
        puts "DRYRUN Skipping a sleep of #{j[:postsleep]}"
      else
        puts "Sleeping to create identifiable troughs for NewRelic for #{j[:postsleep]}..."
        sleep j[:postsleep]
      end
      save_state
    end
  end
end

def exp(_str)
  eval("\"" + '_str' + "\"")
end

TestSuiteInfo.new
