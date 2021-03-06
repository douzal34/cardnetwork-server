import {
    gql
} from 'apollo-server-express';

export default gql `
  extend type Query {
    users: [User!]
    user(id: ID!): User
    me: User
  }

  extend type Mutation {
    signUp(
      email: String!
      password: String!
    ): User!

    signIn(email: String!, password: String!): User!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
  }
`;