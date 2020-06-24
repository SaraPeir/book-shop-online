import React from 'react';
import Favourites from '../Favourites';
import { MockedProvider } from '@apollo/client/testing';
import {UPDATE_BOOKS} from '../../../graphql/mutations';
import {GET_BOOKS} from '../../../graphql/queries.js';
// import { act } from 'react-dom/test-utils';

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
                    },
                    {
                        author: "AUTHOR_2",
                        count: 3,
                        description: "BOOK3_DESCIPTION.",
                        id: "5eb83d4b7e177a8a54277468",
                        image: "IMG_2",
                        isFavourite: true,
                        pages: 312,
                        price: "€ 18.00",
                        score: 4,
                        title: "TITLE_2",
                        type: "TYPE_2"
                    },
                    {
                        author: "AUTHOR_3",
                        count: 3,
                        description: "BOOK3_DESCIPTION.",
                        id: "5eb83d4b7e177a8a54277468",
                        image: "IMG_3",
                        isFavourite: true,
                        pages: 312,
                        price: "€ 18.00",
                        score: 4,
                        title: "TITLE_3",
                        type: "TYPE_3"
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
        },
        {
            author: "AUTHOR_2",
            count: 3,
            description: "BOOK3_DESCIPTION.",
            id: "5eb83d4b7e177a8a54277468",
            image: "IMG_2",
            isFavourite: true,
            pages: 312,
            price: "€ 18.00",
            score: 4,
            title: "TITLE_2",
            type: "TYPE_2"
        },
        {
            author: "AUTHOR_3",
            count: 3,
            description: "BOOK3_DESCIPTION.",
            id: "5eb83d4b7e177a8a54277468",
            image: "IMG_3",
            isFavourite: true,
            pages: 312,
            price: "€ 18.00",
            score: 4,
            title: "TITLE_3",
            type: "TYPE_3"
        }  
    ]
}

let props = {
    title: 'I tuoi preferiti',
    cachedData: data.cachedBook
}

it('Should render correctly', () => {
    const {container} = render(
        <MockedProvider mocks={mocks}>
            <Favourites {...props} updateBooks={mockedFn} />
        </MockedProvider>
      );
  
      expect(container).toMatchSnapshot()
})

it('Should not render cards if there are no data', () => {
    const noDataProps = {
        title: 'I tuoi preferiti'
    }
    const {container} = render(
        <MockedProvider mocks={mocks}>
            <Favourites {...noDataProps} updateBooks={mockedFn} />
        </MockedProvider>
      );
  
      expect(container).toMatchSnapshot()
})

it('Should execute a function when you click at close button', () => {
    let button;
    const {container, getAllByTestId, rerender} = render(
        <MockedProvider mocks={mocks}>
            <Favourites {...props} updateBooks={mockedFn} />
        </MockedProvider>
      );
      button = getAllByTestId('close-button')[0];
      expect(button).toBeInTheDocument()
  
      //   // solucion desde aquí: https://jkettmann.com/testing-apollo-how-to-test-if-a-mutation-was-called-with-mockedprovider/
    //   const addBookMutationMock = mocks[0].result;
    //   addBookMutationMock()
    //   expect(addBookMutationMock).toHaveBeenCalled()
        fireEvent.click(button);

    setTimeout(() => expect(mockedFn).toHaveBeenCalled(), 100);
})