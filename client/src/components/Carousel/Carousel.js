import React from 'react';
import { CarouselProvider, ButtonBack, ButtonNext, Slider } from 'pure-react-carousel';
import './Carousel.css';
import CarouselCard from '../CarouselCard';

const Carousel = (props) => {
      return (
        <div className={"carousel-container"}>
          <CarouselProvider
            naturalSlideWidth={2}
            naturalSlideHeight={1}
            totalSlides={10}
            visibleSlides={2}
            // hasMasterSpinner
          >
            <Slider className={"border"}>
              {props.data.getBooks.length && props.data.getBooks.map(book =>  <CarouselCard image = {book.image} width={100} />)}
            </Slider>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
          </CarouselProvider>
        </div>
      );
  }

  export default Carousel;