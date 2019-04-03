import {
  gql
} from 'apollo-server-express';

export default gql `
  extend type Query {
    addresses: [Address!]
    address(id: ID!): Address
  }

  extend type Mutation {
    createAddress(streetnumber: STRING!, street: STRING!, codepostal: STRING!, country: STRING!, city: STRING!, information: STRING): Address
  }

  type Address {
    id: ID!
    streetnumber: STRING!
    street: STRING!
    codepostal: STRING!
    country: STRING!
    city: STRING!
    information: STRING!
    createdAt: Date!
    updatedAt: Date!
    deletedAt: Date!
  }
`;