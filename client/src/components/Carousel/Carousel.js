import React, {useContext} from 'react';
import { CarouselProvider, ButtonBack, ButtonNext, Slider } from 'pure-react-carousel';
import './Carousel.css';
import CarouselCard from '../CarouselCard';
import CarouselContext from '../CarouselContext';

const Carousel = () => {
  const booksData = useContext(CarouselContext);
  console.log('booksData', booksData);

      return (
        <div className={"carousel-container"}>
          <CarouselProvider
            naturalSlideWidth={2}
            naturalSlideHeight={5}
            totalSlides={10}
            visibleSlides={3}
            // hasMasterSpinner
          >
            <Slider className={"border"}>
              {booksData.data.getBooks.length && booksData.data.getBooks.map(book =>  <CarouselCard key={book.id} image = {book.image} author={book.author} title={book.title} price={book.price}  />)}
            </Slider>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
          </CarouselProvider>
        </div>
      );
  }

  export default Carousel;

  // width={100}