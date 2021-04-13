import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import AllGames from "../views/AllGames";
import CRUDGame from "../components/CRUDGame";
import AllConsoles from "../views/AllConsoles";
import GameDetail from "../views/GameDetail";
import Home from "../views/Home";
import Container from "react-bootstrap/Container";
import NavBar from "../components/NavBar";
import ConsoleDetail from "../views/ConsoleDetail";
import CRUDConsole from "../components/CRUDConsole";
import Login from "../views/Login";

const Routes = () => {
  return (
      <BrowserRouter>
        <NavBar/>
        <Container>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/all-games" component={AllGames}/>
            <Route path="/crud-game" component={CRUDGame}/>
            <Route path="/crud-console" component={CRUDConsole}/>
            <Route path="/all-consoles" component={AllConsoles}/>
            <Route path="/game-details/:id" component={GameDetail}/>
            <Route path="/console-details/:id" component={ConsoleDetail}/>
          </Switch>
        </Container>
      </BrowserRouter>
  )
}

export default Routes;
