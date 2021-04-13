import React from 'react';
import CarouselHome from "../components/CarouselHome";
import Card from "react-bootstrap/Card";
import HomePageLogo from '../images/logo-lgggg.png'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {

  return (
      <section>
        <Row>
          <Col lg={8} md={8} sm={8}>
            <img src={HomePageLogo} className='home-logo'/>
          </Col>
          <Col>
            <h3>You rate it - We write it</h3>
            <p>Din trofaste kilde for spill- og konsollnyheter!</p>
          </Col>
        </Row>
        <CarouselHome/>


        {/* Koden under her er bare noe hardkodet informasjon, ikke noe som ligger i et DB noe sted*/}
        <Card className="mt-2">
          <Card.Header style={{backgroundColor: '#8d7f7f'}}>@GL-Admin#2 &bull; </Card.Header>
          <Card.Body className="home-card-class">
            <Card.Title>Kun 97.000 PS5-enheter produsert?</Card.Title>
            <Card.Text>
              Helt siden 15. November 2013 har folk begynt å spekulere på PlayStation 5. Alt fra utforming, spesifikasjoner på komponenter,
              Cross-platform osv.
            </Card.Text>
            <Card.Text>
              12. November 2020 ble PlayStation 5 lansert i form av to modeller: Digital Edition og Standard.
            </Card.Text>
            <Card.Text>
              Slik navnet insinuerer til er det altså en variant som kun kan spille av spill som er lastet ned eller streames via play-tjenester.
              Standard har vanlig diskleser som de forrige modellene. Til tross for at disse to modellene ble lansert for såvidt en måned siden
              har det såvidt kommet ut i underkant av 100.000 enheter totalt. Sony skylder på produksjonsutfordringer, men mange spekulerer
              roundt om at dette er et PR-stunt på lik linje med Apple med sine AirPods.
            </Card.Text>
            <Card.Text>
              PR-stuntet går ut på å hype opp et spill, enhet, produkt o.l.. over lang tid, deretter lanserer et svært begrenset antall slik at
              markedet virkelig etterspør det, deretter sakte men sikkert kan de pumpe ut moderate kvantiteter med produkter slik at verdien
              holder seg høy og etterspørselen stabil. Sony avkrefter dette, men fansen er ikke enige.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mt-2">
          <Card.Header style={{backgroundColor: '#8d7f7f'}}>@GL-Moderator#21 &bull; </Card.Header>
          <Card.Body className="home-card-class">
            <Card.Title>CyberPunk 2077 går på en optimalisasjonssmell!</Card.Title>
            <Card.Text>
              Slik vi alle vet har vi akkurat fått lansert det lenge ettertraktede spillet, nemlig CyberPunk2077.
            </Card.Text>
            <Card.Text>
              Spillet har møtt på store utfordringer da det krever enorme mengder komponentkrefter for å kunne kjøres
              optimalt. Det forventes av PC-spillere å ha blant annet minimum en RTX 2060 GPU for å dra spillet, noe
              som er et hardt krav for de fleste da 2000-serien ikke er altfor gammel.
            </Card.Text>
            <Card.Text>
              For konsoll-gamere er det enda dårligere nyheter. Spillet krever såpass mye ressurser at det ikke er verdt
              å spille det på konsoll da det vil gi et feil inntrykk av hvordan spillet egentlig er.
            </Card.Text>
          </Card.Body>
        </Card>
      </section>
  )
}

export default Home;