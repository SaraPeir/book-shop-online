import React from 'react';
import './index.scss';
import {GET_BOOKS} from './graphql/queries.js';
import { useQuery } from '@apollo/client';
import BooksCarousel from './components/BooksCarousel';
import Tripboard from './components/Favourites';
import CarouselContext from './components/CarouselContext';

const App = () => {
  const { loading, error, data } = useQuery(GET_BOOKS, {
    fetchPolicy: 'cache-first' // default
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div className="App">
      <CarouselContext.Provider value={{data}}>
        <BooksCarousel title={'I più apprezzati del momento'} />
      </CarouselContext.Provider>
    </div>
  );
}

export default App;
