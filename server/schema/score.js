import {
  gql
} from 'apollo-server-express';

export default gql `
  extend type Query {
    scores: [Score!]
    score(id: ID!): Score
  }

  extend type Mutation {
    createScore(total: INT! , hebdo: INT!, onmonth: INT!): Score
    updateScore(total: INT!, hebdo: INT!, onmonth: INT!): Score
  }

  type Score {
    id: ID!
    total: INT!
    hebdo: INT!
    onmonth: INT!
    createdAt: Date!
    updatedAt: Date!
    deletedAt: Date!
  }
`;