import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { CurrentUser } from "../contexts/CurrentUser";
import SiteCards from "./SiteCards";

function HeaderBar() {
  const navigate = useNavigate();

  const { currentUser, setCurrentUser } = useContext(CurrentUser);
  console.log(currentUser);
  const token = localStorage.getItem("token");
  const user_interface = () => {
    //if token then logout button else login and singup button
    if (token) {
      return (
        <button variant="outline-success" onClick={logout}>
          Logout
        </button>
      );
    } else {
      return (
        <>
          <button
            className="btn-cusine px-3"
            variant="outline-success"
            onClick={() => navigate("/sign-up")}
          >
            Sign Up
          </button>
          <button
            className="btn-cusine px-3"
            variant="outline-success"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </>
      );
    }
  };

  function logout(e) {
    localStorage.removeItem("token");
    setCurrentUser(null);
    navigate("/");
  }

  // this collection of html should be inside of an unordered/ordered list
  let loginActions = user_interface();

  if (currentUser) {
    loginActions = (
      <>
        <div>
          <button
            className="btn-cusine"
            style={{ width: "100%", marginLeft: "0px" }}
            onClick={logout}
          >
            Logout
          </button>
          <h6>Logged in as {currentUser.username}</h6>
        </div>
      </>
    );
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container className="header-main">
        <Navbar.Brand className="text-wrap" onClick={() => navigate("/")}>
          <b className="branding">Hangry Nomster</b>
        </Navbar.Brand>
        <SiteCards />
        {loginActions}
      </Container>
    </Navbar>
  );
}

export default HeaderBar;
