//var _ = require('lodash');
var json2csv = require('json2csv');
var chance = require('chance').Chance();
var fs = require('fs');

var userCount = 1500;
var business_unit = '1';

var rows = [];
var row = null;
var insert = 'insert into `access_codes` (access_code, business_unit) values ';

function zeroPad(num, places) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}

for (var i = 0; i < userCount; i++) {
  if ((i != 0) && (i != userCount)) { insert = insert + ', '; }
  row = {};
  var user = 'user' + zeroPad(i, 5);
  row.username = user;
  row.firstname = chance.first();
  row.lastname = chance.last();
  row.email = user + '@example.com';
  row.password = 'Password123!';
  row.accesscode = chance.guid();
  insert = insert + '("' + row.accesscode + '", "' + business_unit + '")';
  rows.push(row);
}

insert = insert + ';';
console.log(insert);
//console.log(rows);


// restore the data
// restore the trigger
// run the user script
// insert the access codes

var fields = ['username', 'firstname', 'lastname', 'email', 'password', 'accesscode'];

json2csv({ data: rows, fields: fields }, function(err, csv) {
  if (err) console.log(err);
  fs.writeFile('generated_users.csv', csv, function(err) {
    if (err) throw err;
    console.log('file saved');
  });
});

fs.writeFile('accesscode_insert.sql', insert, function)
