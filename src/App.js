import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <h4>i am the checkout page</h4>
          </Route>
          <Route path="/login">
            <h4>I am the login page</h4>
          </Route>
          <Route path="/">
            <h1>I am the home page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
