import {
  gql
} from 'apollo-server-express';

export default gql `
  extend type Query {
    users: [User!]
    user(id: ID!): User
    isUser(email: String!): User
    me: User
  }

  extend type Mutation {
    signUp(
      username: String!
      email: String!
      password: String!
      mobile: String!
      role: String!
    ): Token!

    signIn(email: String!, password: String!): Token!
  }

  type Token {
    token: String!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    mobile: String!
    role: String!
    createdAt: Date!
    deletedAt: Date!
    updatedAt: Date!
  }
`;