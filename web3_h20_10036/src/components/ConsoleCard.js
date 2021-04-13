import React from 'react';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "../App.css";


const ConsoleCard = ({ name, release, price, image}) => {

  return (
      <Col xs={12} sm={6} md={4} lg={3} xl={2} className="mb-5">
        <article>
          <Card className="card-class" variant="dark">
              <Card.Img className="img-console-size" src={`https://localhost:5001/images/${image}`}/>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>Lanseringsdato: {release}</Card.Text>
              <Card.Text>Pris: {price}</Card.Text>
            </Card.Body>
          </Card>
        </article>
      </Col>
  )
}


export default ConsoleCard;