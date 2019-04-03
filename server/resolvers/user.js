import jwt from 'jsonwebtoken';
import {
  combineResolvers
} from 'graphql-resolvers';
import {
  AuthenticationError,
  UserInputError
} from 'apollo-server';
import {
  isAuthenticated
} from './authorization';
import tools from '../components/tools';

const createToken = async (user, secret, expiresIn) => {
  const {
    id,
    email,
    username,
  } = user;
  return await jwt.sign({
    id,
    email,
    username,
  }, secret, {
    expiresIn,
  });
};

export default {
  Query: {
    users: async (parent, args, {
      models
    }) => {
      return await models.User.findAll();
    },
    user: async (parent, {
      id
    }, {
      models
    }) => {
      return await models.User.findOne({
        where: {
          id
        }
      });
    },
    isUser: async (parent, {
      email
    }, {
      models
    }) => {
      const user = await models.User.findOne({
        where: {
          email
        }
      });
      return user;
    },
    me: async (parent, args, {
      models,
      me
    }) => {
      if (!me) {
        return null;
      }

      return await models.User.findOne({
        where: {
          id: me.id
        }
      });
    },
  },

  Mutation: {
    signUp: async (
      parent, {
        username,
        email,
        password,
        mobile
      }, {
        models,
        secret
      },
    ) => {
      const user = await models.User.create({
        username,
        email,
        mobile,
        password,
      });

      return {
        token: createToken(user, secret, '30m')
      };
    },

    signIn: async (
      parent, {
        email,
        password
      }, {
        models,
        secret
      },
    ) => {
      const user = await models.User.findOne({
        where: {
          email
        }
      });

      if (!user) {
        throw new UserInputError(
          'No user found with this login credentials.'
        );
      }

      const isValid = await tools.validatePassword(password);

      if (!isValid) {
        throw new AuthenticationError('Invalid password.');
      }

      // console.log('isvalide -> ', isValid);
      // console.log("log user -> ", user);
      // console.log("log create token -> ", createToken(user, secret, '30m'));
      // console.log("log secret -> ", secret);

      return {
        token: createToken(user, secret, '30m')
      }
    }

    // updateUser: combineResolvers(
    //   isAuthenticated,
    //   async (parent, {
    //     username
    //   }, {
    //     models,
    //     me
    //   }) => {
    //     const user = await models.User.findById(me.id);
    //     return await user.update({
    //       username
    //     });
    //   },
    // )
  }
}