module.exports = {
  app: {
    port: process.env.API_PORT,
    env: process.env.NODE_ENV,
    keys: process.env.APPLICATION_KEYS,
    spa_url: process.env.SPA_URL,
    jwt_secret: process.env.JWT_SECRET,
    wk_serve_url: process.env.WK_SERVE_URL,
    swagger_ui_url: process.env.SWAGGER_UI_URL,
    application_name: process.env.APPLICATION_KEYS,
    service_name: process.env.API_SERVICE_NAME,
    logging_transports: process.env.LOGGING_TRANSPORTS,
    logging_level: process.env.LOGGING_LEVEL
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
  },
  frontEnd: {
    origin: process.env.FRONT_END_ORIGIN
  }
};
