module.exports = {
  app: {
    port: process.env.WK_SERVE_PORT,
    env: process.env.NODE_ENV,
    keys: process.env.APPLICATION_KEYS,
    wk_api_url: process.env.WK_API_URL,
    spa_url: process.env.SPA_URL,
    prod_tools_spa_url: process.env.PROD_TOOLS_SPA_URL,
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET
  },
  postgres: {
    config: {
      user: process.env.POSTGRES_USER,
      database: process.env.POSTGRES_DATABASE,
      host: process.env.POSTGRES_HOST,
      password: process.env.POSTGRES_PASSWORD,
      port: process.env.POSTGRES_PORT,
      max: 10,
      idleTimeoutMillis: 30000
    }
  }
};
