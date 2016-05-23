/* global module, require, console */

var _ = require('lodash');
var pj = require('prettyjson');
var jc = require('json2csv');

var Documenter = function(config) {
  //TODO: this needs a fix too, when we start using a var to hold the root dir, and stop using
  // relative dirs.
  this.docdir = config.documenter.docdir;
  this.rawinfo = {};
};

//preconditions, steps, expected result

Documenter.prototype.test = function(h) {
  console.log('HEADER');
  console.log(h);
};

Documenter.prototype.before = function(h) {
  console.log(h);
};

Documenter.prototype.beforeEach = function(h) {
  console.log(h);
};

Documenter.prototype.title = function(self, title) {
  if (!this.hasOwnProperty('titles')) { this.titles = {}; }
  if (!this.titles.hasOwnProperty(self.test.fullTitle())) { this.titles[self.test.fullTitle()] = null; }
  return this.titles[self.test.fullTitle()] = title;
}

//-- if we cared enough to make them private
//
Documenter.prototype.rawcheck = function(self) {
  var file = self.test.file;
  // var title = self.test.fullTitle();
  // if (!this.rawinfo.hasOwnProperty(file)) { this.rawinfo[file] = {};}
  // if (!this.rawinfo[file].hasOwnProperty(title)) { this.rawinfo[file][title] = []; }
  var title = self.test.fullTitle();
  if (!this.hasOwnProperty(file)) { this[file] = self.test.file; }
  if (!this.rawinfo.hasOwnProperty(title)) {this.rawinfo[title] = []; }
  return;
};

Documenter.prototype.ordered = function(type, self, text) {
  this.rawcheck(self);
  var inserted = {};
  inserted[type] = text;
  this.rawinfo[self.test.fullTitle()].push(inserted);
  return;
};

Documenter.prototype.formatOrdered = function(arr) {
  var newcells = [];
  var newcell = {'steps' : [], 'expected' : []};
  var lasttype = null;
  for (var i = 0; i < arr.length; i++) {
    //NOTE: we don't check what happens if a hash contains multiple keys, like 'steps', and 'expected'
    //  or what if it doesn't have either, so if your data is screwed somewhere, it will certainly not be caught here.
    if (arr[i].hasOwnProperty('steps')) {
      if (lasttype == 'expected') {
        newcells.push(newcell);
        newcell = {'steps' : [], 'expected' : []};
        newcell['steps'].push(arr[i]['steps']);
      } else {
        newcell['steps'].push(arr[i]['steps']);
      }
      lasttype = 'steps';
      continue;
    } else if (arr[i].hasOwnProperty('expected')) {
      if (((newcell['steps']).length === 0) && ((newcell['expected']).length === 0)) {
        throw('Shouldn\'t be trying to write expectations if there\'s no steps to prepare it first.');
      } else {
        newcell['expected'].push(arr[i]['expected']);
      }
      lasttype = 'expected';
      continue;
    } else {
      throw('Neither steps nor expected-- what\'s going on?');
    }
    // if arr[i].key is 'steps', and lasttype is 'expected',
    //   add newcell to newcells
    //   set newcell to empty
    //   add arr[i] to newcell
    //   set lasttype to steps
    //   go to next
    // if arr[i].key is 'steps', and lasttype is not 'expected',
    //   put it in the newcell
    //   set lasttype to steps
    //   go to next.
    // if arr[i].key is 'expected', and newcell is empty,
    //   throw an exception.  shouldn't be able to expect something without doing something first.
    // if arr[i].key is 'expected', and newcell isn't empty, we don't care if its steps or expected,
    //   it can go in.
    //   add arr[i] to newcell
    //   set lasttype to expected
    //   go to next.
  }
  newcells.push(newcell);
  // there should be stuff in the last newcell.  pop it on to the end of newcells/
  return newcells;
};

Documenter.prototype.condenseToMarkdown = function(list) {
  var output = '';
  for (var i = 0; i < list.length; i++) {
    output = output + (i + 1) + '. ';
    if (list[i].length === 0) { throw('How did we even get a separate list item with nothing in it?'); }
    if (list[i].length === 1) {
      output = output + list[i] + '\r\n';
    } else {
      _.each(list[i], function(x) {
        output = output + '- ' + x + '\r\n';
        return;
      });
    }
  }
  return output;
};

Documenter.prototype.exportCSV = function() {
  var self = this;
  var rows = [];
  var fields = ['id', 'Title', 'Created By', 'Created On', 'Estimate', 'Expected Result', 'Forecast', 'Preconditions', 'Priority', 'References', 'Section', 'Section Depth', 'Section Description', 'Section Hierarchy', 'Steps', 'Suite', 'Suite ID', 'Type', 'Updated By', 'Updated On'];
  var tests = _.map(this.markdown, function(v, k) {
    var row = {};
    // changing until we find a better solution to testrail's 240 char limit.
    //row['Title'] = k;
    row['Title'] = self.titles[k];
    row['Steps'] = v.steps;
    row['Expected Result'] = v.expected;
    row['Created By'] = "DOCUBOT _x_MEGA_x_";
    return row;
  });
  jc({ data: tests, fields: fields }, function(err, csv) {
    if (err) console.log(err);
    console.log(csv);
  });
  //TODO: also have to do something about the title being more
  //jc.
  // take the test metadata
  // take the before and before each preconditions
  // take the testcase steps and expected
  // jumble it all into a csv
  // write it to a file
  return;
};
//
//----------------

Documenter.prototype.steps = function(self, steps) {
  return this.ordered('steps', self, steps);
};

Documenter.prototype.expected = function(self, expectations) {
  return this.ordered('expected', self, expectations);
};

Documenter.prototype.close = function() {
  var self = this;
  // reorder and pair up the steps/expecteds
  _.each(this.rawinfo, function(v, k) {
    var ov = self.formatOrdered(v);
    var steps = _.map(ov, function(x) {
      return x.steps;
    });
    var expected = _.map(ov, function(x) {
      return x.expected;
    });
    // turn it all into markdown
    if (!self.hasOwnProperty('markdown')) { self.markdown = {}; }
    if (!self.markdown.hasOwnProperty(k)) {self.markdown[k] = {}; }
    self.markdown[k].steps = self.condenseToMarkdown(steps);
    self.markdown[k].expected = self.condenseToMarkdown(expected);
  });
  //TODO: preconditions from before/beforeeach aren't done.
  //
  // _.each(this.markdown, function(x, self) {
  //   self.exportCSV(self, x); //TODO: self necessary as an arg?
  // });
  this.exportCSV();
  return;
};

Documenter.prototype.verify = function() {
  console.log(this.markdown);
};

module.exports = Documenter;
