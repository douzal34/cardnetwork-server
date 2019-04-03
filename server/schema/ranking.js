import {
    gql
} from 'apollo-server-express';

export default gql `
  extend type Query {
    rankings: [Ranking!]
    ranking(id: ID!): Ranking
  }

  extend type Mutation {
    createRanking(position: Int! , point: Int!, UserId: ID!): Ranking
    updateRanking(position: Int!, point: Int!): Ranking
  }

  type Ranking {
    id: ID!
    position: Int!
    point: Int!
    createdAt: Date!
    updatedAt: Date!
    deletedAt: Date!
  }
`;