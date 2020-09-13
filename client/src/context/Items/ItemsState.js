import React, { useReducer } from "react";

import ItemsContext from "./ItemsContext";
import ItemsReducer from "./ItemsReducer";
import {GET_LOADING, GET_ERROR, GET_DATA} from '../types';

const ItemsState = (props) => {
  let initialState = {
    loading: false, 
    error: null, 
    data: null
  };

  const [state, dispatch] = useReducer(ItemsReducer, initialState);

  const getGqlData = async (loading, error, data) => {
    
        if (loading) return dispatch({ 
            type: GET_LOADING, 
            payload: {
                loading: true, 
                error: null, 
                data: null
            } 
        });

        if (error)  return dispatch({ 
            type: GET_ERROR, 
            payload: {
                loading: false, 
                error: error, 
                data: null
            } 
        });

      dispatch({ 
          type: GET_DATA,
            payload: {
                loading: false, 
                error: null, 
                data: data
            } 
        });
    
  };

  return (
    <ItemsContext.Provider
      value={{
        items: state,
        getGqlData
      }}
    >
      {props.children}
    </ItemsContext.Provider>
  );
};

export default ItemsState;