import React from 'react';
import { Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './CarouselCard.scss';
import ShoppingCard from '../ShoppingCard';

// onCompleted usalo per creare un toaster quando l'operazione di mtation è completa:
// onCompleted

// añadir lazyloading

const CarouselCard = (props) => {
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