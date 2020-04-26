import React, {useState} from 'react';
import { Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './CarouselCard.scss';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

  import {Heart} from '../../images/icons/Heart.js';

const CarouselCard = (props) => {
  const [isSelected, setSelected] = useState(false);

      return (
          <Slide className={"border"} index={0}>
            <Card>
                <div className={"img-container"}>
                <div className={`${isSelected ? "filled-icon icon-container" : "icon-container"}` } onClick={() => setSelected(isSelected ? false : true) }>{Heart}</div>
                    <CardImg src={props.image} alt="Card image cap" />
                </div>
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <CardSubtitle>{props.author}</CardSubtitle>
                    
                    <div className={"price-container"}>
                    <CardText>{props.price}</CardText>
                    </div>
                    <div className={"btn-container"}>
                      <Button>Dettagli</Button>
                    </div>
                </CardBody>
            </Card> 
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