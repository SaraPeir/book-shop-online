import React from 'react';
import ShoppingCard from '../ShoppingCard';
import {UPDATE_BOOKS} from '../../../graphql/mutations';
import {GET_BOOKS} from '../../../graphql/queries.js';
import { createMockClient } from 'mock-apollo-client';
import { ApolloProvider  } from '@apollo/client';
import TestRenderer from 'react-test-renderer';

it ('should ...', () => {
  const mockClient = createMockClient();

  const book = { 
    title: 'TITLE',
    description: 'DESCRIPTION',
    id: '1',
    author: 'AUTHOR',
    price: 'PRICE',
    score: 'SCORE',
    count: 'COUNT',
    pages: 'PAGES',
    image: 'IMAGE',
    isFavourite: false,
    type: 'TYPE'
 };

 const updatedBook = { 
  id: '1',
  isFavourite: true,
};

  const booksData = {
    cachedBooks: [
      book
    ],
    getBooks: [ 
      book
    ]
  }

    mockClient.setRequestHandler(
      UPDATE_BOOKS,
      jest.fn().mockImplementation(() => Promise.resolve({ data: updatedBook })))

      mockClient.setRequestHandler(
        GET_BOOKS,
        jest.fn().mockImplementation(() => Promise.resolve({ data: booksData })))


const component = TestRenderer.create(
  <ApolloProvider client={mockClient}>
    <ShoppingCard 
      isForFavourites={false} 
      isFavourite={book.isFavourite} 
      id={book.id} 
      updateBooks={jest.fn()}
    />
  </ApolloProvider>
);

const heartButton = component.root.findByProps({id: "heart-button"});

TestRenderer.act(() => {
  
  const button = (
    <heartButton 
      onClick={() => book.isFavourite = true}
    />);

  button.props.onClick()

    component.update(
      <ApolloProvider client={mockClient}>
        <ShoppingCard isForFavourites={false} isFavourite={book.isFavourite} id={'1'} updateBooks={jest.fn()} />
      </ApolloProvider>
    );
});
console.log('PROPS', heartButton.props.className)

expect(heartButton.props.className).toBe('filled-icon icon-container');
  });


