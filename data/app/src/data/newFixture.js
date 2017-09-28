module.exports = function(faker, fixtureData) {
  // _almost_ unnecessary.  reserved for any modifications
  // to setting faker seed, loading alternate fixture sets, etc.
  // Returns sql-fixtures styled data, given a string arg
  return async function(fixt) {
    return await fixtureData()[fixt];
  };
};
