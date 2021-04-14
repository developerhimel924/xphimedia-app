import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import XphimBooks from "./Books__pages/XphimBooks";
import JesusBook from "./JesusBook";
import Adamtree from "./Adamtree";
import AdamBook from "./AdamBook";
import Awaken from "./Awaken";
import ThewhitelieBook from "./ThewhitelieBook";
import MusicBooks from "./Books__pages/MusicBooks";
import Coc from "./Coc";
import R2rcd from "./R2rcd";
import R2r400cd from "./R2r400cd";
import Awakenpsalms from "./Awakenpsalms";
import XphimMovies from "./Books__pages/XphimMovies";
import R2rdvd from "./R2rdvd";
import R2r400dvd from "./R2r400dvd";
import Cointelpro from "./Cointelpro";
import XphimAnimations from "./Books__pages/XphimAnimations";
import Spiritman from "./Spiritman";
import Footer from "./Footer";
import { withAuthenticator, AmplifySignOut, AmplifyAuthenticator } from '@aws-amplify/ui-react'


const promise = loadStripe(
  "pk_test_51HpkTLCwdM9b4zXfHlla5MjMhuMdGKRcE6xlTcIxQ1kcxr2Zsf4s1r7CYjhXnMsBvUre5OUzzRn2TIqp1339RFFP00sJhsLsdU"
);

const App = () => {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/XphimBooks">
            <Header />
            <XphimBooks />
            <Footer />
          </Route>
          <Route path="/JesusBook">
            <Header />
            <JesusBook />
            <Footer />
          </Route>
          <Route path="/Adamtree">
            <Header />
            <Adamtree />
            <Footer />
          </Route>
          <Route path="/AdamBook">
            <Header />
            <AdamBook />
            <Footer />
          </Route>
          <Route path="/Awaken">
            <Header />
            <Awaken />
            <Footer />
          </Route>
          <Route path="/ThewhitelieBook">
            <Header />
            <ThewhitelieBook />
            <Footer />
          </Route>
          <Route path="/MusicBooks">
            <Header />
            <MusicBooks />
            <Footer />
          </Route>
          <Route path="/Coc">
            <Header />
            <Coc />
            <Footer />
          </Route>
          <Route path="/R2rcd">
            <Header />
            <R2rcd />
            <Footer />
          </Route>
          <Route path="/R2r400cd">
            <Header />
            <R2r400cd />
            <Footer />
          </Route>
          <Route path="/Awakenpsalms">
            <Header />
            <Awakenpsalms />
            <Footer />
          </Route>
          <Route path="/XphimMovies">
            <Header />
            <XphimMovies />
            <Footer />
          </Route>
          <Route path="/R2rdvd">
            <Header />
            <R2rdvd />
            <Footer />
          </Route>
          <Route path="/R2r400dvd">
            <Header />
            <R2r400dvd />
            <Footer />
          </Route>
          <Route path="/Cointelpro">
            <Header />
            <Cointelpro />
            <Footer />
          </Route>
          <Route path="/XphimAnimations">
            <Header />
            <XphimAnimations />
            <Footer />
          </Route>
          <Route path="/Spiritman">
            <Header />
            <Spiritman />
            <Footer />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>
          <Route path="/">
            <AmplifySignOut />
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default withAuthenticator(App);
