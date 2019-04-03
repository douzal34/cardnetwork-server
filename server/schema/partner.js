import {
  gql
} from 'apollo-server-express';

export default gql `
  extend type Query {
    partners: [Partner!]
    partner(id: ID!): Partner
  }

  extend type Mutation {
    updatePartner(
      name: String!
      description: String!
    ): Partner!
    createPartner(
      name: String!
      description: String!
    ): Partner!
  }

  type Partner {
    id: ID!
    name: String!
    description: String!
    createdAt: Date!
    updatedAt: Date!
    deletedAt: Date!
  }
`;