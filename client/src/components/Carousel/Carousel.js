import React, {useContext} from 'react';
import { CarouselProvider, ButtonBack, ButtonNext, Slider } from 'pure-react-carousel';
import './Carousel.scss';
import CarouselCard from '../CarouselCard';
import CarouselContext from '../CarouselContext';
import {RightArrow, LeftArrow} from '../../images/icons/index.js';

const Carousel = (props) => {
  const booksData = useContext(CarouselContext);
  console.log('booksData', booksData);
  const {innerWidth} = window;

      return (
        props.data.length ?
        <div className={"carousel-container"}>
          <p className="main-style">{props.title}</p>
          <CarouselProvider
            naturalSlideWidth={1}
            naturalSlideHeight={3}
            totalSlides={10}
            visibleSlides={innerWidth > 1023 ? 3 : 2}
            isIntrinsicHeight={true}
            touchEnabled={innerWidth < 769}
            // hasMasterSpinner
          >
           <Slider className={"border"}>
              {props.data.map((book, id) =>  
                <CarouselCard key={id} isForFavourites={false} updateBooks={() => console.log('updateBooks')} isFavourite={book.isFavourite} id={book.id} image = {book.image} author={book.author} title={book.title} price={book.price}  />
              )}
            </Slider>
            {innerWidth > 768 && <ButtonBack id="button-disabled" className="button button-left">{LeftArrow}</ButtonBack>} 
            {innerWidth > 768 && <ButtonNext className="button button-right">{RightArrow}</ButtonNext>} 
          </CarouselProvider>
        </div>
        : null
      );
  }

  export default Carousel;