import React from 'react';
import { Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './CarouselCard.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const CarouselCard = (props) => {
      return (
          <Slide className={"border"} index={0}>
            <Card>
                <div className={"img-container"}>
                    <CardImg src={props.image}  alt="Card image cap" />
                </div>
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <CardSubtitle>{props.author}</CardSubtitle>
                    <CardText>{props.price}</CardText>
                    <Button>Dettagli</Button>
                </CardBody>
            </Card> 
          </Slide>
      );
  }

  export default CarouselCard;

  // <img style={{width: props.width}} src={props.image} />



    

// {/* <Container>
//                   <Row>
//                       <Col className={"border"}>
//                             <img style={{width: props.width}} src={props.image} />
//                       </Col>
//                       <Col>HOLA</Col>
//                   </Row>
//               </Container> */}