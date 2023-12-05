import { useState } from "react";
import { useNavigate } from "react-router";

import API_URL from "../constants";
import Card from "react-bootstrap/Card";

function SignUpForm() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch(
      "https://django-cusine-app-0001-8571ec4d7bc6.herokuapp.com/signup/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    const data = await response.json();

    if (response.status === 200) {
      navigate("/login");
    } else {
      setErrorMessage(data.errors[0].msg);
    }
  }

  return (
    <div className="intro-main">
      <Card>
        <Card.Header>
          <h3>REGISTER</h3>
        </Card.Header>
        <Card.Body>
          <main>
            <div className="signupimg">
              <div className="box"></div>
            </div>
            {errorMessage !== null ? (
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            ) : null}

            <form onSubmit={handleSubmit}>
              <div className="d-flex justify-content-center align-items-center row my-3">
                <div className="col-sm-6 form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    required
                    value={user.username}
                    placeholder="Please enter a username"
                    onChange={(e) =>
                      setUser({ ...user, username: e.target.value })
                    }
                    className="form-control"
                    id="username"
                    name="username"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    required
                    value={user.email}
                    placeholder="Please enter your email address"
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
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
                    value={user.password}
                    placeholder="Please enter a password of 6 or more characters"
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                    className="form-control"
                    id="password"
                    name="password"
                  />
                </div>
              </div>
              <button className="btn-cusine px-3 my-3" type="submit">
                {" "}
                Register{" "}
              </button>
            </form>
          </main>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SignUpForm;
