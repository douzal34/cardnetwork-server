import logger from '../../components/logger';

export default {
  sequelize: {
    uri: process.env.DBDEV || 'cardnetwork',
    user: process.env.USERDB || 'dev',
    password: process.env.PASSDB || 'Style311',
    options: {
      sync: false,
      pool: {
        maxIdleTime: 10000
      },
      maxConcurrentQueries: 100,
      logging(str) {
        // logger.debug(str);
      },
      driver: 'mysql'
    }
  },
  ip: process.env.OPENSHIFT_NODEJS_IP ||
    process.env.IP ||
    undefined,

  // Server port
  port: process.env.OPENSHIFT_NODEJS_PORT ||
    process.env.PORT || 8000,
  secrets: {
    session: 'cardnetwork-sql-secret-dev'
  },
};