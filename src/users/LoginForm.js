import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { CurrentUser } from "../contexts/CurrentUser";
import API_URL from "../constants";
import Card from "react-bootstrap/Card";

function LoginForm() {
  const navigate = useNavigate();

  const { setCurrentUser } = useContext(CurrentUser);

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch(
      "https://django-cusine-app-0001-8571ec4d7bc6.herokuapp.com/signin/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );

    const data = await response.json();
    console.log(data);

    if (response.status === 200) {
      setCurrentUser(data.user);
      console.log(data.user);
      localStorage.setItem("token", data.token);
      navigate("/");
    } else {
      setErrorMessage(data.errors[0].msg);
    }
  }

  return (
    <div className="intro-main">
      <Card>
        <Card.Header>
          <h3>LOGIN</h3>
        </Card.Header>
        <Card.Body>
          <main>
            <div className="loginimg">
              <div className="box"></div>
            </div>

            {errorMessage !== null ? (
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            ) : null}
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-sm-6 form-group">
                  <label htmlFor="email">username</label>
                  <input
                    type="text"
                    required
                    value={credentials.email}
                    placeholder=" Please enter your username"
                    onChange={(e) =>
                      setCredentials({
                        ...credentials,
                        username: e.target.value,
                      })
                    }
                    className="form-control"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="col-sm-6 form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    required
                    value={credentials.password}
                    placeholder=" Please enter your password"
                    onChange={(e) =>
                      setCredentials({
                        ...credentials,
                        password: e.target.value,
                      })
                    }
                    className="form-control"
                    id="password"
                    name="password"
                  />
                </div>
              </div>
              <button className="btn-cusine px-3 my-3" type="submit">
                Login
              </button>
            </form>
          </main>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LoginForm;
