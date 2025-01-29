import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      _id
      userName
      email
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
