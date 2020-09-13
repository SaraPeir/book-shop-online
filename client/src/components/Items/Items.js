import React, { useContext, useEffect } from 'react';

import Carousel from '../Carousel';
import Favourites from '../Favourites';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import {GET_BOOKS} from '../../graphql/queries.js';
import { useQuery } from '@apollo/client';

import itemsContext from "../../context/Items/ItemsContext";

const Items = (props) => {
    const { loading, error, data } = useQuery(GET_BOOKS, {
        fetchPolicy: 'cache-first' // default
      });

    const itemsCont = useContext(itemsContext);
    const items = itemsCont.items; // in ItemState.js, in ItemContext.Provider value
    
    console.log('items', items);
    
    useEffect(() => {
        itemsCont.getGqlData(loading, error, data);
        console.log('itemsL', items);

      }, [loading, error, data]);

    return(
        <React.Fragment>
            <Route path="/favourites">
                <Favourites title={'I tuoi preferiti'} cachedData = {data.cachedBooks}  />
            </Route>
            <Route exact path="/">
                <Carousel title={'I più apprezzati del momento'} cachedData = {data.cachedBooks} />
            </Route>
        </React.Fragment>
    );
}

export default Items;

