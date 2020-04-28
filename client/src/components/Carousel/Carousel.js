import React, {useContext} from 'react';
import { CarouselProvider, ButtonBack, ButtonNext, Slider } from 'pure-react-carousel';
import './Carousel.scss';
import CarouselCard from '../CarouselCard';
import CarouselContext from '../CarouselContext';

const Carousel = () => {
  const booksData = useContext(CarouselContext);
  console.log('booksData', booksData);

      return (
        <div className={"carousel-container"}>
          <p className="main-style">Libri</p>
          <CarouselProvider
            naturalSlideWidth={1}
            naturalSlideHeight={3}
            totalSlides={10}
            visibleSlides={3}
            isIntrinsicHeight={true}
            // hasMasterSpinner
          >
            <Slider className={"border"}>
              {booksData.data.getBooks.length && booksData.data.getBooks.map((book, id) =>  <CarouselCard key={id} updateBooks={() => console.log('updateBooks')} isFavourite={book.isFavourite} id={book.id} image = {book.image} author={book.author} title={book.title} price={book.price}  />)}
            </Slider>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
          </CarouselProvider>
        </div>
      );
  }

  export default Carousel;

  // width={100}