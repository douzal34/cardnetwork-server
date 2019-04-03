import {
  gql
} from 'apollo-server-express';

export default gql `
  extend type Query {
    tournaments: [Tournament!]
    tournament(id: ID!): Tournament
  }

  extend type Mutation {
    createTournament(PartnerId: ID!, TournamentTypeId: ID!): Tournament
  }

  type Tournament {
    id: ID!
    createdAt: Date!
    updatedAt: Date!
    deletedAt: Date!
  }
`;