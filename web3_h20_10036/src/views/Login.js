import React, {useContext, useState} from 'react';
import {Row, Col, Toast} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {AdminContext, AdminProvider} from "../contexts/AdminContext";
import Button from "react-bootstrap/Button";

const Login = () => {

  const {admin} = useContext(AdminContext);
  const [adminState, setAdminState] = admin;

  const handleGuest = () => {
    setAdminState(false);
    alert("Du er nå logget inn som GJEST")
    console.log(adminState)
  }

  const handleAdmin = () => {
    setAdminState(true);
    alert("Du er nå logget inn som ADMIN")
    console.log(adminState)
  }

  return (
      <AdminProvider>

      <section>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className={"mb-5"} style={{textAlign: 'center'}}>
            <Card className="login-card">
              <Card.Body>
                <Card.Title>Informasjon om brukerprofiler:</Card.Title>
                <Card.Text>Ifølge oppgaven er det ikke krav om autentisering på innlogging, dermed ligger det kun to valg man kan klikke på for å aktivere rettighetene til den valgte brukerprofilen. Dette er mer for å visualisere hvilke rettigheter de forskjellige profilene har, ikke for å autentisere hvem du er som bruker.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={4} sm={4} xl={6} xs={4}>
            <Card className="login-card">
              <Card.Body>
                <Card.Title>ADMIN</Card.Title>
                <Card.Text>Som administrator har du fulle rettigheter til å kunne legge til, slette og oppdatere spill
                  og
                  konsoller.</Card.Text>
                <Button onClick={handleAdmin}>Bytt til ADMIN</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={4} sm={4} xl={6} xs={4}>
            <Card className="login-card">
              <Card.Body>
                <Card.Title>GJEST</Card.Title>
                <Card.Text>Som gjest vil du kunne se alt av spill, konsoller og informasjon. Du har derimot IKKE rettigheter til å legge til, slette eller oppdatere spill og konsoller.</Card.Text>
                <Button onClick={handleGuest}>Bytt til GJEST</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
      </AdminProvider>
  )
}

export default Login;