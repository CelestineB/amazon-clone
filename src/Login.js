import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "firebase";
import { useState } from "react";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (event) => {
    event.preventDefault();
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //loggen in, redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.massage));
  };
  const register = (event) => {
    event.preventDefault();
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.massage));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <h1>SignIn</h1>
        <form action="">
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button onClick={login} className="login__signinButton" type="submit">
            Sign In
          </button>
        </form>

        <p>
          By signing -in you agree to Amazon's conditions of Use and Sale.
          Please see our Privacy Notice, Our cookies Notice and Our Internet
          Based Ads Notice
        </p>
        <button className="login__registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
