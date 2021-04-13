import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import Row from "react-bootstrap/Row";
import ConsoleCard from "../components/ConsoleCard";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import addImg from "../images/add-img.png";
import {Switch, Route, Link} from "react-router-dom";
import "../App.css";
import CRUDConsole from "../components/CRUDConsole";
import {AdminContext} from "../contexts/AdminContext";

const ConsolesList = () => {

  // Context import for admin state
  const {admin} = useContext(AdminContext);
  const [adminState] = admin;

  const [consoles, setConsoles] = useState(
      [{
        id: "",
        name: "laster inn...",
        release: "laster inn...",
        manufacturer: "laster inn...",
        price: 0,
        image: "laster inn..."
      }]);


  useEffect(() => {
    const url = "https://localhost:5001/consoles";
    try {
      axios.get(url)
          .then(response => {
            setConsoles(response.data)
          })
    } catch (e) {
      alert("Something went wrong... Error:" + e)
    }


  }, [])

  const getConsoles = () => {
    return consoles.map((console, i) => {
      return <Link key={i} style={{textDecoration: 'none'}}
                   to={{pathname: `/console-details/${console.id}`, state: {console}}}><ConsoleCard {...console}/></Link>
    }).reverse()
  }

  return (
      <section>
        <h3 style={{textAlign: 'center'}}>Alle konsoller ({consoles.length})</h3>
        <Row>
          {getConsoles()}
          {adminState && <Col xs={12} sm={6} md={4} lg={3} xl={2} className="mb-5">
            <Link to="/crud-console">
              <Card className="card-class">
                <Card.Body>
                  <Card.Title>Legg til konsoll</Card.Title>
                  <Card.Img src={addImg}/>
                </Card.Body>
              </Card>
            </Link>
          </Col>}
        </Row>

        <Switch>
          <Route path="/crud-console" component={CRUDConsole}/>
        </Switch>
      </section>
  )
}

export default ConsolesList;