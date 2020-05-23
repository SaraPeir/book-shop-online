// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';
// import { MockedProvider } from "@apollo/react-testing";
// import { createMockClient } from 'mock-apollo-client';
// import {GET_BOOKS} from './graphql/queries.js';
// import { ApolloProvider  } from '@apollo/client';

// jest.mock('@apollo/client');

// test('renders learn react link', () => {
//   const mockClient = createMockClient();

//   const booksData = {
//     cachedBooks: [
//       {
//         title: 'TITLE',
//         description: 'DESCRIPTION',
//         id: '1',
//         author: 'AUTHOR',
//         price: 'PRICE',
//         score: 'SCORE',
//         count: 'COUNT',
//         pages: 'PAGES',
//         image: 'IMAGE',
//         isFavourite: true,
//         type: 'TYPE'
//       }
//     ],
//     getBooks: [ 
//       {
//         title: 'TITLE',
//         description: 'DESCRIPTION',
//         id: '1',
//         author: 'AUTHOR',
//         price: 'PRICE',
//         score: 'SCORE',
//         count: 'COUNT',
//         pages: 'PAGES',
//         image: 'IMAGE',
//         isFavourite: true,
//         type: 'TYPE'
//       }
//     ]
//   }
 
//   mockClient.setRequestHandler(
//     GET_BOOKS,
//     () => Promise.resolve({ data: booksData }));

//   const { getByText } = render(
//     <ApolloProvider client={mockClient}>
//       <App />
//     </ApolloProvider>
//   );
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// <MockedProvider mocks={[]} addTypename={false}>
    //   <App />
    // </MockedProvider>
