import React from 'react';
import { CarouselProvider, ButtonBack, ButtonNext, Slider } from 'pure-react-carousel';
import './Carousel.scss';
import CarouselCard from '../CarouselCard';
import {RightArrow, LeftArrow} from '../../images/icons/index.js';

const Carousel = (props) => {
  const {innerWidth} = window;

  const getData = (cachedData) => {
    try {
      return cachedData;
      }
      
    catch {
      return [];
    }
  }

  if(!getData(props.cachedData).length) return null;

  const favourites = getData(props.cachedData).filter(book => book.isFavourite);

  // para controlar que la cache se actualiza instantaneamente gracias a refetchQueries
  console.log('favourites length', favourites.length);

      return (
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
              {props.cachedData.map((book, id) =>  
                <CarouselCard key={id} isForFavourites={false} updateBooks={() => console.log('updateBooks')} isFavourite={book.isFavourite} id={book.id} image = {book.image} author={book.author} title={book.title} price={book.price}  />
              )}
            </Slider>
            {innerWidth > 768 && <ButtonBack id="button-disabled" className="button button-left">{LeftArrow}</ButtonBack>} 
            {innerWidth > 768 && <ButtonNext className="button button-right">{RightArrow}</ButtonNext>} 
          </CarouselProvider>
        </div>
      );
  }

  export default Carousel;