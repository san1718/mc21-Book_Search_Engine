const typeDefs = `

    type User {
        _id: ID!
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [Books]
    }

    type Book {
        bookID: ID!
        authors: [String]
        description: String!
        title: String!
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }

    input BookInput {
        bookId: String!
        authors: [String]
        description: String!
        title: String!
        image: String
        link: String
    }

    type Query {
        me: User
    }

    type Mutation {
        loginUser(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(bookInput: BookInput): User
        removeBook(bookId: ID!): User
    }
`;

module.exports = typeDefs;
