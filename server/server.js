import config from './config/environment';
import http from 'http';
import express from 'express';
import jwt from 'jsonwebtoken';
import logger from './components/logger';
import {
  ApolloServer,
  AuthenticationError
} from "apollo-server-express";
import bodyParser from 'body-parser';
import morgan from 'morgan';

import models from './sqldb/index';
import schema from './schema';
import resolvers from './resolvers';

const app = express();

var env = app.get('env');
app.all('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
if (env === 'production') {
  app.use(morgan('combined', {
    stream: logger.stream
  }));
}
if (env === 'development' || env === 'test') {
  app.use(morgan('dev'));
}

const onError = (err, req, res, next) => {
  if (!err) {
    return next();
  } else {
    res.send(500, err);
    return err;
  }
}

const getMe = async req => {
  const token = req.headers['x-token'];
  if (token) {
    try {
      return await jwt.verify(token, config.default.secrets.session);
    } 
    catch (e) {
      // throw new AuthenticationError(
        // 'Your session expired. Sign in again.',
      // );
      return e;
    }
  }
};

app.use(onError);

const server = new ApolloServer({
  introspection: true,
  playground: true,
  typeDefs: schema,
  resolvers,
  formatError: error => {
    console.log("log error => ", error.message);
    const message = error.message
      .replace('SequelizeValidationError: ', '')
      .replace('Validation error: ', '');
    return {
      ...error,
      message,
    };
  },
  context: async ({
    req,
    connection
  }) => {
    if (req) {
      const me = await getMe(req);
      return {
        models,
        me,
        secret: config.default.secrets.session,
      };
    }
  },
});

server.applyMiddleware({
  app,
  path: '/graphql'
});

const httpServer = http.createServer(app);
// server.installSubscriptionHandlers(httpServer);

httpServer.listen(
  8000, () => {
    console.log(`Apollo Server on http://localhost:${config.port}/graphql`);
  });