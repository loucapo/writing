module.exports = function(config, pg, promiseretry) {
  return function () {
    var ping = function () {
      const configs = config.postgres.config;

      var client = new pg.Client(configs);
      return new Promise(function (res, rej) {
        // connect to our database
        return client.connect(function (err) {
          if (err) {
            return rej(err);
          }
          // execute a query on our database
          client.query('SELECT version()', function (err, result) {
            if (err) {
              return rej(err);
            }
            var output = result.rows[0];
            console.log(output);
            // disconnect the client
            client.end(function (err) {
              if (err) {
                return rej(err);
              }
            });
            return res(output);
          });
        });
      });
    };

    return promiseretry(function (retry, number) {
      console.log('attempt number', number);
      return ping().catch(retry);
    }, {retries: 4});
  }
};