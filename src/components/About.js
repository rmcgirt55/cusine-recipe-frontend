import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const About = () => {
  return (
    <div className="intro-main">
      <Card>
        <Card.Header>
          <h3>About Us</h3>
        </Card.Header>
        <Card.Body>
          <b>
            <i>
              "Welcome to DishDiscovery, your go-to culinary platform where food
              enthusiasts can explore, create, and share delightful recipes. Our
              mission is to provide a user-friendly space that empowers
              individuals to discover, contribute, and manage their favorite
              recipes. At DishDiscovery, users have the opportunity to engage in
              a vibrant community dedicated to the art of cooking. Whether
              you're a seasoned chef, a kitchen novice, or someone passionate
              about experimenting with flavors, this platform is designed to
              cater to your culinary interests. With a secure login system,
              users can create personalized accounts, enabling them to
              effortlessly post, edit, and delete their own recipes. Our
              intuitive interface ensures a seamless experience, allowing you to
              easily manage your culinary creations while also interacting with
              other users' recipes. We believe in the joy of cooking and the
              satisfaction of sharing delicious creations. That's why
              DishDiscovery is not just a platform—it's a collaborative space
              where individuals can exchange ideas, discover new flavors, and
              celebrate the love for food. Join us on this flavorful journey and
              start creating, exploring, and sharing your recipes today!"
            </i>
          </b>
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;
