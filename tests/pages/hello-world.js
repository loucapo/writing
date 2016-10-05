var Page = require('marvin-js').Page;

module.exports = new Page({

  url: { value: '/' },

  heading: { get: function () { return this.element("h1"); } },
  onlyButton: {get: function() {return this.element("//div/button", 'xpath')}}

});
