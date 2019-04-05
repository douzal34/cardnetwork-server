export default {
  sequelize: {
    uri: process.env.DBDEV || "cardnetwork",
    user: process.env.USERDB || "dev",
    password: process.env.PASSDB || "Style311",
    options: {
      sync: false,
      pool: {
        maxIdleTime: 10000
      },
      maxConcurrentQueries: 100,
      logging() {
        // logger.debug(str);
      },
      driver: "mysql"
    }
  },
  secrets: {
    session: "cardnetwork-secret-production"
  }
};