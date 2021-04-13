import React from 'react';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "../App.css";

const GamesCard = ({title, price, platform, pegi, genre, image}) => {

  return (
      <Col xs={12} sm={6} md={4} lg={3} xl={2} className="mb-5">
        <article>
        <Card className="card-class">
          <Card.Img className={"img-game-size"} variant="top" src={`https://localhost:5001/images/${image}`}/>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>Pris: {price}kr</Card.Text>
            <Card.Text>Plattform: {platform}</Card.Text>
            <Card.Text>Aldersgrense: {pegi}</Card.Text>
          </Card.Body>
        </Card>

        </article>
      </Col>
  )
}

export default GamesCard;