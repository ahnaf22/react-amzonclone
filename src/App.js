import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe('pk_test_51HQ4R4LeWQ111Js3chMwRgzUb2dNxmI0zmkshkfFiXAapXOoEsO78l74mur8v3MY7ohCUQp1HAhbMPR0y4hL5VpW00IYHXZvkj');

function App() {

  const [state, dispatch] = useStateValue();
  //console.log(state);

  useEffect(() => {
    auth.onAuthStateChanged(authuser => {
      //console.log(authuser);
      if (authuser) {

        dispatch({
          type: "SET_USER",
          user: authuser,
        })
      } else {
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
        {/* header remains constant in all page */}

        {/* switch for routing */}
        <Switch>

          <Route path="/" exact>
            <Header />
            <Home />
          </Route>

          <Route path="/login" >
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>

          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
