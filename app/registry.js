var dagon = require('dagon');
var path = require('path');

module.exports = function (_options) {
    var options = _options || {};
    var container = dagon(options.dagon).container;
    var result;
    try {
        result = container(x =>
                x.pathToRoot(path.join(__dirname, '/../'))
                    .requireDirectoryRecursively('./app/src')
                    .for('winston')
                        .renameTo('logger')
                    .groupAllInDirectory('./app/src/controllers', 'controllers')
                    .complete());
    } catch (ex) {
        console.log(ex); // eslint-disable-line no-console
        console.log(ex.stack); // eslint-disable-line no-console
    }
    return result;
};
