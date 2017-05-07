var Component = require('marvin-js').Component;

module.exports = new Component({
  'rubric heading': { get: function() { return this.element("[data-id='rubric-title']"); }},
  'rubric edit': { get: function() { return this.element("[data-id='activity-rubric-edit-button']"); }}
});
