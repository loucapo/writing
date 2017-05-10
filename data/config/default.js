module.exports = {
  postgres: {
    config: {
      user: process.env.POSTGRES_USER,
      database: process.env.POSTGRES_DATABASE,
      host: process.env.POSTGRES_HOST,
      password: process.env.POSTGRES_PASSWORD,
      port: 5432,
      max: 10,
      idleTimeoutMillis: 30000
    }
  },
  testingAPI: {
    port: process.env.TESTING_API_PORT
  }
};
