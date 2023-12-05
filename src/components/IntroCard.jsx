import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const IntroCard = () => {
  return (
    <div className="intro-main">
      <Card>
        <Card.Header>
        <h1>Welcome to DishDiscovery</h1>
    <p>Join our culinary community and embark on a flavorful journey where food enthusiasts gather to discover, share, and savor delightful recipes from around the world.</p>
    <p>At DishDiscovery, we believe that recipes are more than just instructions; they're stories passed down through generations, a blend of culture, and a celebration of taste. Whether you're a seasoned chef or a home cook, this platform is your canvas to showcase your culinary creativity.</p>
    <p>Explore a myriad of recipes spanning diverse cuisines, from traditional classics to modern twists. Discover the joy of cooking and find inspiration to craft your next culinary masterpiece. Join us in fostering a vibrant community by sharing your own treasured recipes, elevating the experience for all passionate food lovers.</p>
    <p>Start your gastronomic adventure today by adding your favorite recipes, exploring new flavors, and connecting with fellow food enthusiasts. DishDiscovery awaits your unique flavors and culinary tales!</p>
        </Card.Header>
        <Card.Body>
          <Card.Img
            className="intro-img"
            variant="top"
            src="https://cms-b-assets.familysearch.org/dims4/default/b2a6d42/2147483647/strip/true/crop/800x500+0+0/resize/1240x775!/format/webp/quality/90/?url=https%3A%2F%2Ffamilysearch-brightspot.s3.amazonaws.com%2F89%2F3f%2F1a23c4a6fe52a96d2a6d2586cb90%2Fworld-cuisine.jpg"
          />
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default IntroCard;
