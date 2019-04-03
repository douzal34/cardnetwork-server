import {
  gql
} from 'apollo-server-express';

export default gql `
  extend type Query {
    files: [File!]
    file(id: ID!): File
  }

  extend type Mutation {
    createFile(path: STRING!, type: INT!): File
  }

  type File {
    id: ID!
    path: STRING!
    type: INT!
    createdAt: Date!
    updatedAt: Date!
    deletedAt: Date!
  }
`;