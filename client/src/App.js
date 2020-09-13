import React from 'react';
import './index.scss';
import {GET_BOOKS} from './graphql/queries.js';
import { useQuery } from '@apollo/client';
import Carousel from './components/Carousel';
import Items from './components/Items';
import Favourites from './components/Favourites';
import CarouselContext from './components/CarouselContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ItemsState from "./context/Items/ItemsState";

const App = () => {
  const { loading, error, data } = useQuery(GET_BOOKS, {
    fetchPolicy: 'cache-first' // default
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const validatedData = data.cachedBooks || [];

  if(!validatedData.length) return 'Error en cargar los datos';

  return (
    <div className="App">
      <Router>
        <div>
          <button><Link to="/">Home</Link></button>
          <button><Link to="/favourites">Favourites</Link></button>
          <Switch>
            <ItemsState>
              <Items /> 
            </ItemsState>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
