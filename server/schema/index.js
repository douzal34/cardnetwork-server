import {
  gql
} from 'apollo-server-express';

import userSchema from './user';
// import scoreSchema from './score';
// import partnerSchema from './partner';
// import rankingSchema from './ranking';
// import tournamentSchema from './tournament';
// import tournamentTypeSchema from './tournamentType';
// import registrationSchema from './registration';
// import addressSchema from './address';
// import fileSchema from './file';

const linkSchema = gql `
  scalar Date

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [linkSchema, userSchema];