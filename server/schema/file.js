import {
  gql
} from 'apollo-server-express';

export default gql `
  extend type Query {
    files: [File!]
    file(id: ID!): File
  }

  extend type Mutation {
    createFile(path: String!, type: Int!): File
  }

  type File {
    id: ID!
    path: String!
    type: Int!
    createdAt: Date!
    updatedAt: Date!
    deletedAt: Date!
  }
`;