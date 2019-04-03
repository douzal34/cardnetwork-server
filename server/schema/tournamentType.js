import {
  gql
} from 'apollo-server-express';

export default gql `
  extend type Query {
    tournamentTypes: [TournamentType!]
    tournamentType(id: ID!): TournamentType
  }

  extend type Mutation {
    createTournamentType(name: String!): TournamentType
  }

  type TournamentType {
    id: ID!
    name: String!
    createdAt: Date!
    updatedAt: Date!
    deletedAt: Date!
  }
`;