import React from 'react';
import CarouselCard from '../CarouselCard';
import { MockedProvider } from '@apollo/client/testing';
import {UPDATE_BOOKS} from '../../../graphql/mutations';
import {GET_BOOKS} from '../../../graphql/queries.js';

jest.mock('pure-react-carousel')

import { render, 
   fireEvent, 
   waitFor,
    screen } from '@testing-library/react'

    // npm test -- --coverage --watchAll=false para el report
    const mockedFn = jest.fn();

    const mocks = [
        {
          request: {
            query: UPDATE_BOOKS,
            variables: {
              id: "5eb83d4b7e177a8a54277468",
              isFavourite: false
            },
          },
          result: {
            data: {
                updateBook: {
                id: "5eb83d4b7e177a8a54277468",
                isFavourite: true
              },
            },
          }
       
        },
        {
            request: {
              query: GET_BOOKS, // necessary to mock refetching after mutation
              variables: {},
            },
            result: {
              data: {
                  getBook: [
                    {
                        author: "AUTHOR_1",
                        count: 3,
                        description: "BOOK1_DESCIPTION.",
                        id: "5eb83d4b7e177a8a54277468",
                        image: "IMG_1",
                        isFavourite: false,
                        pages: 312,
                        price: "€ 18.00",
                        score: 4,
                        title: "TITLE_1",
                        type: "TYPE_1"
                    }
                  ],
              },
            }
          },
      ]

const data = {
    cachedBook: [
        {
            author: "AUTHOR_1",
            count: 3,
            description: "BOOK1_DESCIPTION.",
            id: "5eb83d4b7e177a8a54277468",
            image: "IMG_1",
            isFavourite: true,
            pages: 312,
            price: "€ 18.00",
            score: 4,
            title: "TITLE_1",
            type: "TYPE_1"
        }
    ]
}

const props = {
    author: "AUTHOR_1",
    count: 3,
    description: "BOOK1_DESCIPTION.",
    id: "5eb83d4b7e177a8a54277468",
    image: "IMG_1",
    isFavourite: false,
    pages: 312,
    price: "€ 18.00",
    score: 4,
    title: "TITLE_1",
    type: "TYPE_1"
}
it('Should render correctly', () => {
    const {container} = render(
        <MockedProvider mocks={mocks}>
            <CarouselCard {...props}  />
        </MockedProvider>,
        
      );
  
      expect(container).toMatchSnapshot()
})
