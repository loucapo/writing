# @TODO rdoc
class Paths
  @root = File.expand_path("#{File.dirname(__FILE__)}/..")

  @paths = {
    # @TODO make it so this can take an absolute path
    jmeter: 'apache-jmeter-2.13',
    templates: {
      test_index: 'templates/test_index',
      suite_index: 'templates/suite_index',
      jmx: 'templates/jmx'
    },
    suites: '',
    results: '',
    artifacts: 'artifacts',
    config: 'config',
    projects: 'projects'
  }

  def self.join(file, *dirs)
    path = dirs.reduce(@paths) { |hsh, k| hsh.fetch(k) { |x| yield(x) } }
    File.join(@root, path, file)
  end
end
