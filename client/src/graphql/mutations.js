import { gql } from '@apollo/client';

export const UPDATE_BOOKS = gql`
    mutation updateBook($id: ID, $isFavourite: Boolean) {
        updateBook(input: {
        id: $id,
        isFavourite: $isFavourite
        }) {
            id
            isFavourite
        }
    }
`