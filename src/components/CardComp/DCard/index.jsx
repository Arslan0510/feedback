import React from "react";
import { Badge, Button, Card } from "react-bootstrap";

import Photo from "./photo.jpg";
import "./DCard.css";

const DCard = () => {
  return (
    <Card className='card-container'>
      <Badge className='pro' variant='primary'>
        Pro
      </Badge>
      <Card.Img src={Photo} />
      <Card.Body>
        <Card.Title>Rahul Yaduanshi</Card.Title>
        <Card.Text>Nodia, U.P.</Card.Text>
        <Card.Text>
          User interface designer and <br /> front-end developer
        </Card.Text>
        <div class='skills'>
          <h6>Skills</h6>
          <ul>
            <li>UI / UX</li>
            <li>Front End Development</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node</li>
          </ul>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DCard;
