import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import LoginForm from "./components/Login/LoginForm";
import  Header  from "./components/MoviesPage/Header";
import { Watchlist } from "./components/MoviesPage/Watchlist";
import { Watched } from "./components/MoviesPage/Watched";
import { Add } from "./components/MoviesPage/Add"
import { GlobalProvider } from "./context/GlobalState";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";




function App() {
  
  return (
    <GlobalProvider>
      <Router>
        
      <Header />

        <Switch>
          <Route exact path="/signin" exact component={LoginForm}></Route>
          <Route exact path="/"> <Watchlist/></Route>
          <Route path="/add" > <Add/> </Route>
          <Route path="/watched"> <Watched/> </Route>
        </Switch>
        <Redirect to="/signin"></Redirect>
      </Router>
    </GlobalProvider>
  );
}

export default App