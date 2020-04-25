import { gql } from '@apollo/client';

export const GET_BOOKS  = gql`
query getBooks {
    getBooks {
      title
      description
      id
      author
      price
      score
      count
      pages
      image
      isFavourite
      type
    }
  }
` 