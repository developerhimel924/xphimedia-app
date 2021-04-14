import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import logo from "./Assets/logo.png";
import loginVectorBg from "./Assets/login_vector.png";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__content">
        <div className="login__logo__sec">
          <Link to="/">
            <img className="login__logo" src={logo} alt="login logo" />
          </Link>
        </div>
        <div className="login__wrapper">
          <div className="login__container">
            <h1 className="signin__text">SIGN IN</h1>

            <form>
              <h5>E-mail</h5>
              <input type="text" onChange={(e) => setEmail(e.target.value)} />

              <h5>Password</h5>
              <input
                type="password"
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
          </div>
          <div className="register__form">
            <h1 className="">Create Account</h1>

            <form>
              <input placeholder="Your Name...." type="text" required />
              <br />
              <input
                placeholder="Email Address...."
                required
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <input
                placeholder="Type a strong password"
                required
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </form>
            <button onClick={register} className="login__registerButton">
              <small>Create your Xphimedia Account</small>
            </button>
          </div>
          <div className="login__vector__bg">
            <img src={loginVectorBg} alt="login Vector Background" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
