import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";

// imports for strip payment method
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import Footer from "./Footer";

const promis = loadStripe(
  "pk_test_51N7i3yDVZs30dx9980bE8pGiMmtVtNMiASBxCgyrGA4pvM8cjqMwv6w3lAt7m0WMwitYURyhZhKJyosjZSHOcGrl00F2AicPdH"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // if will only run once when the app components loads.....
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user is just logged in / the user was logged in
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
        <Routes>
          <Route path="/orders" element={
          <>
          <Header />
          <Orders />
          <Footer />
          </>
          
          } />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/payment"
            element={
              <>
                {" "}
                <Header />
                <Elements stripe={promis}>
                  <Payment />{" "}
                </Elements>
                <Footer />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header /> <Home /> <Footer /> {" "}
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
