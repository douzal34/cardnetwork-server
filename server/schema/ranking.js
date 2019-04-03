import {
    gql
} from 'apollo-server-express';

export default gql `
  extend type Query {
    rankings: [Ranking!]
    ranking(id: ID!): Ranking
  }

  extend type Mutation {
    createRanking(position: INT! , point: INT!, UserId): Ranking
    updateRanking(position: INT!, point: INT!): Ranking
  }

  type Ranking {
    id: ID!
    position: INT!
    point: INT!
    createdAt: Date!
    updatedAt: Date!
    deletedAt: Date!
  }
`;