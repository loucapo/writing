/* global module, console */

var progress = function(msg) {
  console.log('PROGRESS: ', msg);
  return;
};

var db = function(msg) {
  console.log('DB: ', msg);
  return;
};

//var debug = function(msg, sep1 = '\/ ', sep2="^^ ") {
function debug(msg, sep1 = '\\/ ', sep2="^^ ") {
  console.log(':DEBUG:', sep1, sep1, sep1, sep1, sep1);
  console.log(msg);
  console.log(':EMD:', sep2, sep2, sep2, sep2, sep2);
  return;
};

module.exports = function(config) {
  return {
    progress : progress,
    db       : db,
    debug    : debug
  };
};

// cooked s1e3 18:08 man with breadheadprotestor
