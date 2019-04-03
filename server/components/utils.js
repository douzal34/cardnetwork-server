// const logger = require('./logger');
import _ from 'lodash';

function returnMsgHeaderSent(functionName, req, res) {
  return `${functionName} headersSent: ${res.headersSent}, route : ${req.baseUrl}${req.path}, version : ${req.version}, method : ${req.method}`;
}

function eligibleError(code) {
  let lcode = [404, 401, 403];
  if (lcode.indexOf(code) !== -1) {
    return false;
  }
  return true;
}

export default function (controller) {
  return {
    handleError(req, res, logging) {
      return function (err) {
        logging = typeof logging !== 'undefined' ? logging : true;
        if (eligibleError(err.statusCode)) {
          logger.error({
            Controller: controller,
            statusCode: err.statusCode,
            errors: err && err.hasOwnProperty('errors') ? err.errors : null,
            error: err.error || err.body || err.data || err.message || err,
          });
        }
        if (res && !res.headersSent) {
          res.status(err.statusCode || 500).json(err.error || err.body || err.data || err.message || {});
        } else {
          logger.error(returnMsgHeaderSent('HandleError', req, res));
        }
        return err;
      };
    },
    saveEntity(updates, req) {
      return function (entity) {
        if (!entity) return null;
        entity.changed('updatedAt', true);
        return entity.save().then(function () {
          return entity.updateAttributes(updates);
        });
      };
    },
    handleUnauthorized(req, res) {
      return function (err) {
        if (res && !res.headersSent) {
          res.status(err.statusCode || 401).json(err.error || err.body || err.data || err.message || {});
        } else {
          err.headersSent = res.headersSent;
          logger.error(returnMsgHeaderSent('HandleUnauthorized', req, res));
          io.notifyError(err, req);
        }
        return err;
      };
    },
    handleEntityNotFound(req, res, statusCode) {
      return function (entity) {
        if (!entity) {
          statusCode = statusCode || 404;
          if (res && !res.headersSent) {
            res.status(statusCode).end();
          } else {
            logger.error(returnMsgHeaderSent('HandleEntityNotFound', req, res));
          }
        }
        return entity;
      };
    },
    handleResultEmpty(res, statusCode) {
      statusCode = statusCode || 204;
      return function (entity) {
        if (!entity) res.status(statusCode).end();
        return entity;
      };
    },
    responseWithResult(req, res, statusCode) {
      statusCode = statusCode || 200;
      return function (entity) {
        if (entity) {
          if (res && !res.headersSent) {
            res.status(statusCode).json(entity)
              .end();
          } else {
            logger.error(returnMsgHeaderSent('ResponseWithResult', req, res));
          }
          return entity;
        }
        return null;
      };
    },
    responseWithoutResult(req, res, statusCode) {
      statusCode = statusCode || 204;
      return function (entity) {
        if (entity) {
          if (res && !res.headersSent) {
            res.status(statusCode).end();
          } else {
            logger.error(returnMsgHeaderSent('ResponseWithoutResult', req, res));
          }
        }
        return entity;
      };
    }
  };
};