import {
  gql
} from 'apollo-server-express';

export default gql `
  extend type Query {
    addresses: [Address!]
    address(id: ID!): Address
  }

  extend type Mutation {
    createAddress(streetnumber: String!, street: String!, codepostal: String!, country: String!, city: String!, information: String): Address
  }

  type Address {
    id: ID!
    streetnumber: String!
    street: String!
    codepostal: String!
    country: String!
    city: String!
    information: String!
    createdAt: Date!
    updatedAt: Date!
    deletedAt: Date!
  }
`;