import React from 'react';
import './index.scss';
import {GET_BOOKS} from './graphql/queries.js';
import { useQuery } from '@apollo/client';
import Carousel from './components/Carousel';
import CarouselContext from './components/CarouselContext';

const App = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div className="App">
      <CarouselContext.Provider value={{data}}>
        <Carousel />
      </CarouselContext.Provider>
    </div>
  );
}

export default App;
