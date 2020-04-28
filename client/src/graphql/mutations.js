import { gql } from '@apollo/client';

export const UPDATE_BOOKS = gql`
    mutation updateBook($id: ID, $isFavourite: Boolean) {
        updateBook(input: {
        id: $id,
        isFavourite: $isFavourite
        }) {
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