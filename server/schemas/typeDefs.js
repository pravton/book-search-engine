// import gql from apolloserver
const { gql } = require('apollo-server-express');

// create typeDefs
const typeDefs = gql`

  type Book {
    bookId: String
    authors: [String]
    description: String
    image: String
    title: String
    link: String
  }

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Query {
    me: User
  }

  input bookDetails {
        bookId: String
        authors: [String]
        title: String
        description: String
        image: String
        link: String
    }


  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: bookDetails): User
    removeBook(bookId: String!): User
  }

  type Auth {
    token: ID!
    user: User
  }
`

module.exports = typeDefs;
