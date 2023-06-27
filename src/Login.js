import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

import { auth, db } from "./firebase";
import myImage from './logo3.png';


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    // prevent the page from refreshing
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));

    // some fancy firebase login code stuff
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        console.log(auth);

        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));

    // some fancy firebse register code stuff
  };

  return (
    <div className="login">
      <Link to="/">
        {/* <img
          className="login__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon logo image"
        /> */}
        <img
          className="login__logo"
          src={myImage}
          alt="Amazon logo image"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the E-commerce FAKE Website Conditions of Use &
          Sale. Pleas see our Privacy Notice, Our Cookies Notice and our
          intrest-Based Ads Notice.
        </p>

        <button onClick={register} className="login__registerButton">
          Create your Account
        </button>
      </div>
    </div>
  );
}

export default Login;
