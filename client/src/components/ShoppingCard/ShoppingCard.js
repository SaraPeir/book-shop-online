import React from 'react';
import { useMutation } from '@apollo/client';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

import {Heart} from '../../images/icons/index.js';
import {UPDATE_BOOKS} from '../../graphql/mutations';

// onCompleted usalo per creare un toaster quando l'operazione di mtation è completa:
// onCompleted

// añadir lazyloading

const Card = (props) => {
  const [updateBooks] = useMutation(
      UPDATE_BOOKS
    );

      return (
        <Card>
            {props.isForFavourites && 
            <div className="close-button-icon-container"
            onClick={() => {
                props.updateBooks(); // a lo mejor para meter un toaster
                updateBooks({
                variables: {
                id: props.id, 
                isFavourite: !props.isFavourite
                } 
            })
            }} >
                X
            </div>
            }
            <div className={"img-container"}>
            { !props.isForFavourites && 
                <div className={`${props.isFavourite ? "filled-icon icon-container" : "icon-container"}` } onClick={() => {
                props.updateBooks(); // a lo mejor para meter un toaster
                updateBooks({
                    variables: {
                    id: props.id, 
                    isFavourite: !props.isFavourite
                } 
                })
                }}>
                {Heart}
                </div>
            }
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
      );
  }

  export default ShoppingCard;


    

// {/* <Container>
//                   <Row>
//                       <Col className={"border"}>
//                             <img style={{width: props.width}} src={props.image} />
//                       </Col>
//                       <Col>HOLA</Col>
//                   </Row>
//               </Container> */}