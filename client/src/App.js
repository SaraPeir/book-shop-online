import React from 'react';
import './index.scss';
import {GET_BOOKS} from './graphql/queries.js';
import { useQuery } from '@apollo/client';
import BooksCarousel from './components/BooksCarousel';
import Favourites from './components/Favourites';
import CarouselContext from './components/CarouselContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  const { loading, error, data } = useQuery(GET_BOOKS, {
    fetchPolicy: 'cache-first' // default
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div className="App">
      <Router>
        <div>
          <button><Link to="/">Home</Link></button>
          <button><Link to="/favourites">Favourites</Link></button>
          <Switch>
            <CarouselContext.Provider value={{data}}>
              <Route path="/favourites">
                <Favourites title={'I tuoi preferiti'} />
              </Route>
              <Route exact path="/">
                <BooksCarousel title={'I più apprezzati del momento'} />
              </Route>
            </CarouselContext.Provider>
          </Switch>
        </div>
      </Router>
      
    </div>
  );
}

export default App;

// return (
//   <div className="App">
//     <Router>
//       <div>
//         <button><Link to="/">Home</Link></button>
//         <button><Link to="/favourites">Favourites</Link></button>
//         <Switch>
//           <CarouselContext.Provider value={{data}}>
//             <Favourites title={'I tuoi preferiti'} />
//             <BooksCarousel title={'I più apprezzati del momento'} />
//           </CarouselContext.Provider>
//         </Switch>
//       </div>
//     </Router>
    
//   </div>
// );