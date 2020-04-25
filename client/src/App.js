import React from 'react';
import './index.scss';
import {GET_BOOKS} from './graphql/queries.js';
import { gql, useQuery } from '@apollo/client';
import Carousel from './components/Carousel';

const App = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div className="App">
      <p className="main-style">Title</p>
      <Carousel data={data} />
    </div>
  );
}

export default App;
