import path from 'path';
import _ from 'lodash';
const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var all = {
  env: process.env.NODE_ENV,
  apiVersion: '0.0.1',

  // Root path of server
  root: path.normalize(`${__dirname}/../../..`),

  // Server port
  port: process.env.PORT || 9000,

  // Server IP
  ip: process.env.IP || '0.0.0.0',
};

// Export the config object based on the NODE_ENV
// ==============================================
export default _.merge(
  all,
  require(`./${process.env.NODE_ENV}.js`) || {});