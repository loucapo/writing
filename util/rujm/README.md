# Rujm

For lack of a better name, 'rujm' is a simple way to drive JMeter with Ruby.
The primary goal is to be able to run JMeter tests with a small set of variations repeatedly, with all of the inputs and outputs of the test automatically named and saved.

### Intro
The test plans that Jmeter runs are jmx files.  These are just xml, and there is no official schema.  What's valid?  What the Jmeter binary accepts, full stop.  So while there are ways within jmeter to parameterize properties (from the command line, or .properties files) for interoperability with other tools and for reproducibility, we'd rather keep the variables elsewhere, and render static jmx files to store with their particular results.

### Reqs
 * Ruby (only tested with 2.3.0, probably 2.1+ required)
 * Jmeter 2.13
 * TODO add link to them graphing jars
 * that's it.  no other external anythings.
 *
### How to use (short)

* Create a jmeter testplan doing roughly what you want, foo.jmx.
* Copy that file to (rujm)/templates/jmx/foo.jmx.erb
* Edit the file as an ERB template, assuming the parser will have access to a hash named 'config', which you'll populate next.
* Create a file (rujm)/config/whatever.yaml.erb, defining the values to pass to the erb template.
* Run rujm.rb -cwhatever
* You can always use --dryrun to just generate the files and commands, without actually running any jmeter command.  Maybe there's more under --help.

### directory layout
* apache-jmeter-2.13
    * exactly what you think.  just the official tgz unzipped, plus whatever any extra jars and whatnot you need.  never run the system version.
* artifacts
    * where to store ancillary files for the tests- csvs of user records, images to test upload, etc.
* config
    * default location rujm looks for the yaml to feed to templates
* lib
    * rujm itself
* projects
    * results from testsuite runs written here
* templates
    * jmx
        * jmeter test plan templates
    * suite_index
    * test_index



### config
At its simplest, a config file should be valid yaml (after any erb processing) and contain:
```
:suite:
  :tests:
    :whatever:
      :template: 'something' # will load templates/jmx/some.jmx.erb dir
      :name: 'distinguishing'
```
**suite** is the top level container.  A suite directly corresponds to what is created and run each rujm invocation.  A suite can have an optional name specified here, or passed on the command line (-p, which will override anything in the config file.)  If no name is provided, the timestamp at invocation will be used.  To avoid confusion of results, suite names must be unique within their project; rujm will refuse to run otherwise.

**tests** is just an array within the suite.  Each element it contains (the name of which matters none) will be treated as a test.

a **test** must have a template, and should have a name (timestamp + the jmx sha1 will be used if this is omitted.)  The whole of the test hash as represented here is what will be passed to each jmx template, within which is is addressable as 'config'.

Note that the config files are themselves ERB templates as well, and a giant chunk of the reason to even bother doing things this way.  Here's a less minimal example.
```yaml
<% users = [5, 10, 15, 18, 20, 22, 25, 30] %>
---
:project: 'ratio-fix'
:suite:
  :name: baseline-POB-course
  :tests:<% for user in users %>
    :test<%= user %>:
      :template: 'basic'
      :users: <%= user %>
      :name: basic-with-<%= user %>-users
      :duration: 320
      :postsleep: 300
      :enrollments: <%= Paths.join('SEL-889/0250k/generated_enrollments-first-2000.csv', :artifacts) %>
      :course_view_count: 3
      :render: 'graphs1'<% end %>
```
**project** is optional, and top-level.  It controls what subdirectory within the projects directory all of the suite will be written to.  When omitted, 'default' is used.

Also note the special klunky bits **postsleep** and **render**.  While these are still passed to the erb template, they are actually for flow control after the test, and should be refactored to something saner.  **postsleep** just inserts a sleep (in seconds) after a test (and its rendering) has finished, essentially just to create easily identifiable breaks between tests (for things like NewRelic and Grafana.)

**render** actually runs another jmx file to automatically create graphs.  Except there's only the one template, it uses a hardcoded command, and will probably be entirely replaced.  For now, leave it as is, or omit it if you don't want any automatically generated charts.

and when **debugging**, note that the result of the config parsing (assuming the rendering successfully finishes) is stored at projects/(project)/(suitename)/config.yaml, and can be quickly made with -d.
### process

### results
Just browse around in the projects folder, should be self-explanatory.  Or host it with something like
```bash
ruby -rwebrick -e'WEBrick::HTTPServer.new(:Port => 8007, :DocumentRoot => Dir.pwd).start' &
```
from the projects dir.

### gotchas
* ERBs space handling is not to be taken for granted.
```
<stringProp name="ThreadGroup.duration">
            <%= config[:duration] %>
</stringProp>
```
will render down to ' 300 ', which jmeter will interpret as a string, which will just halt the test.

```
<stringProp name="ThreadGroup.duration"><%= config[:duration] %></stringProp>
```
will render to '300', and be correctly used as an integer.

### todo / next

* fix the render option to not just use the one hardcoded jmeter command
* switch the internal TestSuiteInfo and TestInfo to activerecord
    * this would also let us use tags for runs and results instead of this unsearchable strict hierarchy
* add influxdb/grafana as output
    * note that the individual samplers' (http actions) names must be specified to the backend listener in the jmx to be individually queryable in the output,
    by default jmeter only emits data for 'all'
* to the results page for each test, add dynamically generated links to NewRelic for whatever specified host or apm, for the specific timerange directly surrounding the test
* ditto above for a grafana dashboard
* individual http samplers would be easy to template, something like
```
:testfoo:
  :name: login-get
    :path: '/login/index.php'
  :name: login-post
    :path: /login/index.php'
    :method: POST
    :parameters:
    - :name: username
      :value: '${username}'
    - :name: password
      :value: 'zxcvzxcv'
```
