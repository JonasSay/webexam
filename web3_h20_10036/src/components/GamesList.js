import React, {useState, useEffect, useContext} from 'react';
import GamesCard from "../components/GamesCard";
import axios from "axios";
import {Link, Route, Switch} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import addImg from "../images/add-img.png";
import "../App.css";
import CRUDGame from "./CRUDGame";
import {AdminContext} from "../contexts/AdminContext";

const GamesList = () => {

  // Context import for admin state
  const {admin} = useContext(AdminContext);
  const [adminState, setAdminState] = admin;
  // axios call returning all games
  const [games, setGames] = useState([{}]);


  useEffect(() => {
    const url = "https://localhost:5001/games";
    try {
      axios.get(url)
          .then(response => {
            setGames(response.data)
          })

    } catch (e) {
      alert("Something went wrong... Error:" + e)
    }


  }, [])

  const getGames = () => {
    return games.map((game, i) => {
      return <Link key={i} style={{textDecoration: 'none'}}
                   to={{pathname: `/game-details/${game.id}`, state: {game}}}><GamesCard {...game}/></Link>
    }).reverse()
  }

  return (
      <section>
        <h3 style={{textAlign: 'center'}}>Alle spill ({games.length})</h3>
        <Row>
          {getGames()}
          {adminState && <Col xs={12} sm={6} md={4} lg={3} xl={2} className="ml-20">
            <Card className="card-class">
              <Link to="/crud-game">
                <Card.Body>
                  <Card.Title>Legg til spill</Card.Title>
                  <Card.Img src={addImg}/>
                </Card.Body>
              </Link>
            </Card>
          </Col>}
        </Row>

        <Switch>
          <Route path="/add-game" component={CRUDGame}/>
        </Switch>

      </section>
  )
}

export default GamesList;