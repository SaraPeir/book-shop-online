import React, {useContext} from 'react';
import '../Carousel/Carousel.scss';
import CarouselCard from '../CarouselCard';
import CarouselContext from '../CarouselContext';

const Tripboard = (props) => {
  const booksData = useContext(CarouselContext);
  const favourites = booksData.data.getBooks.filter(book => book.isFavourite);

  if(!favourites.length) return null; 

  console.log('booksData', booksData);

      return (
        <div className={"carousel-container"}>
          <p className="main-style">{props.title}</p>
          
           <div className={"border"}>
              {booksData.data.getBooks.map((book, id) =>  
                book.isFavourite && <CarouselCard key={id} updateBooks={() => console.log('updateBooks')} isFavourite={book.isFavourite} id={book.id} image = {book.image} author={book.author} title={book.title} price={book.price}  />
              )}
            </div>
        </div>
      );
  }

  export default Tripboard;