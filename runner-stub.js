var Mocha = require('mocha'),
    fs = require('fs'),
    path = require('path');

// get the current directory.
// by design, this will be the root.
// this should avoid the problem of the relative directory paths,
// and the tests caring which dicrectory they were invoked from.
var dirs = {};
dirs.root    = __dirname
console.log(dirs.root)
dirs.config  = path.join(dirs.root, 'config');
dirs.data    = path.join(dirs.root, 'data');
dirs.helpers = path.join(dirs.root, 'helpers');
dirs.tests   = path.join(dirs.root, 'tests');
dirs.logs    = path.join(dirs.root, 'logs');
// there are others, doc, util, etc, we just don't care about right this moment, as the tests don't need access.
// @todo this might break the execution of stuff in util though..

// make sure they all exist
for (var d in dirs) {
  try {
    fs.statSync(dirs[d]);
  } catch (e) {
    throw('Can not find base directory ' + d + ' : Fix before proceeding.');
  }
}

// Instantiate a Mocha instance.
var mocha = new Mocha({
  timeout: '60000',
  reporter: 'mochawesome'
});

var testfiles =  [
  'tests/mocha/tx_history_block/in_progress.js'
];

// var testDir = 'some/dir/test'

// // Add each .js file to the mocha instance
// fs.readdirSync(testDir).filter(function(file){
//   // Only keep the .js files
//   return file.substr(-3) === '.js';

// }).forEach(function(file){
//   mocha.addFile(
//     path.join(testDir, file)
//   );
// });

// read the config file


// create directory for artifacts for the run
function createArtifactDir(name) {
  // if name is null, use current timestamp in
  var logdir = null;
  logdir = moment().toISOString().replace(/:/g, "-");
}

testfiles.forEach(function(file) {
  mocha.addFile(file);
})


// Run the tests.
mocha.run(function(failures){
  process.on('exit', function () {
    process.exit(failures);  // exit with non-zero status if there were failures
  });
});
