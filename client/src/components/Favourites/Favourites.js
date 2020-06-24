import React, {useContext} from 'react';
import './Favourites.scss';
import { Container, Row, Col } from 'reactstrap';
import ShoppingCard from '../ShoppingCard';

const Favourites = (props) => {
  const getData = (cachedData) => {
    if(cachedData) return cachedData
    return [] 

  }

  const booksData = getData(props.cachedData);

  const favourites = booksData.filter(book => book.isFavourite);

  // para controlar que la cache se actualiza instantaneamente gracias a refetchQueries
  console.log('favourites length', favourites.length);

  if(!favourites.length) return 'Non hai selezionato nessun elemento come favorito'; 
      return (
        <Container>
          <p className="main-style">{props.title}</p>
          <Row xs="1" sm="2" md="2" lg="3" xl="4">
              {favourites.map((book, id) =>  
                book.isFavourite && 
                <Col key={id}>
                  <ShoppingCard 
                    cardStyle={'card-style'}
                    updateBooks={() => console.log('updateBooks')} 
                    isFavourite={book.isFavourite} 
                    id={book.id} 
                    image = {book.image} 
                    author={book.author} 
                    title={book.title} 
                    price={book.price} 
                    isForFavourites= {true}
                  />
                </Col>
              )}
            </Row>
        </Container>
      );
  }

  export default Favourites;