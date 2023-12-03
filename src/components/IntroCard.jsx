import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const IntroCard = () => {
  return (
    <div className="intro-main">
      <Card>
        <Card.Header>
          <h3>
            "EAT WHATEVER YOU WANT, AND IF ANYONE TRIES TO LECTURE YOU ABOUT
            YOUR WEIGHT, EAT THEM TOO"
          </h3>
        </Card.Header>
        <Card.Body>
          <Card.Img
            className="intro-img"
            variant="top"
            src="https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1000&format=pjpg&exif=0&iptc=0"
          />
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default IntroCard;
