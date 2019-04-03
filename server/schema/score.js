import {
  gql
} from 'apollo-server-express';

export default gql `
  extend type Query {
    scores: [Score!]
    score(id: ID!): Score
  }

  extend type Mutation {
    createScore(total: Int! , hebdo: Int!, onmonth: Int!): Score
    updateScore(total: Int!, hebdo: Int!, onmonth: Int!): Score
  }

  type Score {
    id: ID!
    total: Int!
    hebdo: Int!
    onmonth: Int!
    createdAt: Date!
    updatedAt: Date!
    deletedAt: Date!
  }
`;