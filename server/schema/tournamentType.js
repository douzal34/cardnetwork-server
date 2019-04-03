import {
  gql
} from 'apollo-server-express';

export default gql `
  extend type Query {
    tournamentTypes: [TournamentType!]
    tournamentType(id: ID!): TournamentType
  }

  extend type Mutation {
    createTournamentType(name: STRING!): TournamentType
  }

  type TournamentType {
    id: ID!
    name: STRING!
    createdAt: Date!
    updatedAt: Date!
    deletedAt: Date!
  }
`;