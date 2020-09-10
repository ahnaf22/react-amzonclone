import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
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

        </Switch>
      </div>
    </Router>
  );
}

export default App;
