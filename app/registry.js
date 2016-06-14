/**
 * Created by rharik on 10/1/15.
 */
"use strict";

var dagon = require('dagon');
var path = require('path');

module.exports = function(_options) {
    var options   = _options || {};
    var container = dagon(options.dagon).container;
    var result;
    try {
        result = container(x=>
                x.pathToRoot(path.join(__dirname, '/../'))
                    .requireDirectoryRecursively('./app/src')
                    .for('winston').renameTo('logger')
                    .complete());
    } catch (ex) {
        console.log(ex);
        console.log(ex.stack);
    }
    return result;
};
