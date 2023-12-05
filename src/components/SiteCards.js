import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { useContext } from "react";
import { CurrentUser } from "../contexts/CurrentUser";

function SiteCards() {
  const { currentUser } = useContext(CurrentUser);

  return (
    <>
      {!currentUser ? (
        <Card className="navigation-main">
          <Card.Header>
            <Nav
              variant="tabs"
              defaultActiveKey="#first"
              className="justify-content-center"
              style={{ backgroundColor: "#97c9f7" }}
            >
            <Nav.Item>
            
  <Nav.Link as={Link} to="/about" style={{ color: 'white', fontSize: '2em', fontWeight: 'bold', textDecoration: 'underline', animation: 'pulse 1s infinite' }}>
    About
  </Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link as={Link} to="/recipes" style={{ color: 'white', fontSize: '2em', fontWeight: 'bold', textDecoration: 'underline', animation: 'pulse 1s infinite' }}>
    Recipes
  </Nav.Link>
</Nav.Item>



            </Nav>
          </Card.Header>
        </Card>
      ) : (
        <Card className="mx-2" style={{ flexGrow: 1 }}>
          <Card.Header>
            <Nav
              variant="tabs"
              defaultActiveKey="#first"
              className="justify-content-center"
              style={{ backgroundColor: "#97c9f7" }}
            >
              <Nav.Item>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/recipes">
                  Recipes
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={Link} to="/newRecipe">
                  Add Recipe
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
        </Card>
      )}
    </>
  );
}

export default SiteCards;
