var config = require('config');
var _ = require('lodash');
var sqlFixtures = require('sql-fixtures');

var knex = require('knex')({
  client: 'pg',
  connection: config.postgres.config
});

var fixtureCreator = new sqlFixtures(knex);

var dataSpec = {
  activity: [
    { id: '13630184-5955-0138-9908-ab065f1bcad2',
	  course_id: 1234,
	  title: 'Assignment Turtle',
	  created_by_id: '2d9a14e1-794e-49f9-84f2-5b798dbc8e92',
      created_date: '2017-04-07',
      prompt: null,
      modified_by_id: null,
      modified_date: null },
    { id: '13630184-5955-0138-9118-ab065f1bcad2',
	  course_id: 1234,
	  title: 'Assignment Porpoise',
	  created_by_id: '2d9a14e1-794e-49f9-84f2-5b798dbc8e92',
      created_date: '2017-04-07',
      prompt: null,
      modified_by_id: null,
      modified_date: null },
  ]
};

var loadFixtures = async function() {
  try {
    console.log('==========BEGIN Data Load=========');
    await fixtureCreator.create(dataSpec);
    console.log('==========END Data Load=========');
  } catch (ex) {
    console.log('==========exception=========');
    console.log(ex);
    console.log('==========END exception=========');
  }
}

loadFixtures().then(process.exit);
