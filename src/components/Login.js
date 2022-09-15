import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/system";

let emails = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function Login() {
  const [setLogin, setLoginData] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({
      ...setLogin,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (setLogin.email === "" || setLogin.password === "") {
      alert("enter the data");
    } else if (!setLogin.email.match(emails)) {
      //Email
      alert("You have entered an invalid email address!");
    } else {
      console.log(setLogin);
      navigate("/home");
    }
  };

  return (
    <div
      className="container border mt-3 shadow"
      style={{ backgroundColor: "pink" }}
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="#" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            required="true"
            className="form-control"
            onChange={handleChange}
            value={setLogin.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="#" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            required="true"
            minLength="5"
            className="form-control"
            onChange={handleChange}
            value={setLogin.password}
          />
        </div>
        <Box textAlign="center">
          <div>
            <Link to="./home">
              <button type="submit" className="btn btn-primary mb-2">
                Log In
              </button>
            </Link>
          </div>

          <div>
            <Link to="./signup">
              <button
                type="submit"
                className="btn  mb-2"
                style={{ color: "blue" }}
              >
                Forgot Password?
              </button>
            </Link>
          </div>

          <div>
            <Link to="./signup">
              <button type="submit" className="btn btn-success mb-2">
                Create a New Account
              </button>
            </Link>
          </div>
        </Box>
      </form>
    </div>
  );
}

export default Login;
