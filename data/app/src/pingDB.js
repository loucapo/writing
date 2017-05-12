module.exports = function(config, pg, promiseretry) {
  return function() {
    const ping = () => {
      const configs = config.postgres.config;

      const client = new pg.Client(configs);
      return new Promise((res, rej) => {
        // connect to our database
        return client.connect(connectErr => {
          if (connectErr) {
            return rej(connectErr);
          }
          // execute a query on our database
          client.query('SELECT version()', (queryErr, result) => {
            if (queryErr) {
              return rej(queryErr);
            }
            const output = result.rows[0];
            console.log(output);
            // disconnect the client
            client.end(disconnectErr => {
              if (disconnectErr) {
                return rej(disconnectErr);
              }
              return null;
            });
            return res(output);
          });
        });
      });
    };

    return promiseretry((retry, number) => {
      console.log('attempt number', number);
      return ping().catch(retry);
    }, {retries: 4});
  };
};
