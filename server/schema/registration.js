import {
  gql
} from 'apollo-server-express';

export default gql `
  extend type Query {
    registrations: [Registration!]
    registration(id: ID!): Registration
  }

  extend type Mutation {
    createRegistration(TournamentId: ID!, UserId: ID!): Registration
  }

  type Registration {
    id: ID!
    createdAt: Date!
    updatedAt: Date!
    deletedAt: Date!
  }
`;