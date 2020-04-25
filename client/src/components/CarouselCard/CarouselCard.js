import React from 'react';
import { Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './CarouselCard.less';

const CarouselCard = (props) => {
      return (
          <Slide className={"border"} index={0}>
              <img style={{width: props.width}} src={props.image} />
          </Slide>
      );
  }

  export default CarouselCard;

    