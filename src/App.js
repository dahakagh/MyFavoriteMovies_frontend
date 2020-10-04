import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import { Watchlist } from "./components/MoviesPage/Watchlist";
import { Watched } from "./components/MoviesPage/Watched";
import {Add } from "./components/SearchPage";
import { GlobalProvider } from "./context/GlobalState";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";
import SignIn from "./components/LoginPage";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/signin" component={SignIn}></Route>
          <Route exact path="/" component={Watchlist} />
          <Route path="/add" component={Add} />
          <Route path="/watched" component={Watched} />

        </Switch>
        <Redirect to="/signin" />
      </Router>
    </GlobalProvider>
  );
}

export default App;
