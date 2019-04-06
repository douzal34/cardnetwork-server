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
      return await models.User.find({
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
      const user = await models.User.find({
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
      const user = await models.User.findOne({
        where: {
          id: me.id
        }
      });
      return user;
    },
  },

  Mutation: {
    signUp: async (
      parent, {
        username,
        email,
        password,
        mobile,
        role,
      }, {
        models,
        secret
      },
    ) => {
      const user = await models.User.create({
        username,
        email,
        password,
        mobile,
        role
      });
      return { token: tools.createToken(user, secret, '30m') };
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
          `Aucun Utilisateur n'est enregistré avec cet email ${email} !`
        );
      }

      const isValid = await tools.validatePassword(password, user.password);

      if (!isValid) {
        throw new AuthenticationError('Mauvais mot de passe !');
      }

      return {
        token: tools.createToken(user, secret, '360d')
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