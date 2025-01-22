import { gql } from "@apollo/client";

export const _ADDUSER = gql`
  mutation userAdd($username: String!, $email: String!, $password: String!) {
    userAdd(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGINUSER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVEBOOK = gql`
  mutation saveBook($bookInput: BookInput) {
    saveBook(bookInput: $bookInput) {
      _id
      username
      bookCount
    }
  }
`;

export const REMOVEBOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      bookCount
    }
  }
`;
