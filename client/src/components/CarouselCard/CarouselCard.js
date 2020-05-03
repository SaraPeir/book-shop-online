import React from 'react';
import { Slide } from 'pure-react-carousel';
import { useMutation } from '@apollo/client';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './CarouselCard.scss';
import ShoppingCard from '../ShoppingCard';

import {Heart} from '../../images/icons/index.js';
import {UPDATE_BOOKS} from '../../graphql/mutations';

// onCompleted usalo per creare un toaster quando l'operazione di mtation è completa:
// onCompleted

// añadir lazyloading

const CarouselCard = (props) => {
  const [updateBooks] = useMutation(
      UPDATE_BOOKS
    );

      return (
          <Slide index={props.id}>
            <ShoppingCard {...props} />
          </Slide>
      );
  }

  export default CarouselCard;


    

// {/* <Container>
//                   <Row>
//                       <Col className={"border"}>
//                             <img style={{width: props.width}} src={props.image} />
//                       </Col>
//                       <Col>HOLA</Col>
//                   </Row>
//               </Container> */}