import React, {useContext} from 'react';
import './Favourites.scss';
import { Container, Row, Col } from 'reactstrap';
import ShoppingCard from '../ShoppingCard';
import CarouselContext from '../CarouselContext';

const Favourites = (props) => {
  const booksData = useContext(CarouselContext);
  const favourites = booksData.data.getBooks.filter(book => book.isFavourite);

  if(!favourites.length) return null; 

  console.log('booksData', booksData);

      return (
        <Container>
          <p className="main-style">{props.title}</p>
          <Row xs="1" sm="2" md="2" lg="3" xl="4">
              {booksData.data.getBooks.map((book, id) =>  
                book.isFavourite && 
                <Col>
                  <ShoppingCard 
                    key={id} 
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