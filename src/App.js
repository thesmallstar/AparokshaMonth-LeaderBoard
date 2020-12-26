import "./App.sass";
import React from "react";
import Header from "./components/Header";
import Leaderboard from "./components/Leaderboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "components/Details";

function App() {
  return (
    <Router>
      <section class="section">
        <div class="container">
          <Header />

          <Switch>
            <Route exact path="/">
              <Leaderboard />
            </Route>
            <Route path="/user/:rollnumber">
              <Details />
            </Route>
            <Route path="*">
              <h1>
                <center>What?</center>
              </h1>
            </Route>
          </Switch>
        </div>
      </section>
    </Router>
  );
}

export default App;
