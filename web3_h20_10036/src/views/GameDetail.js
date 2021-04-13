import React, {useContext, useState} from 'react';
import GamesCard from "../components/GamesCard";
import axios from 'axios';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {Link, useHistory} from "react-router-dom";
import {AdminContext, AdminProvider} from "../contexts/AdminContext";


const GameDetail = (props) => {

  const [confirmDelete, setConfirmDelete] = useState(false);

  const {admin} = useContext(AdminContext);
  const [adminState, setAdminState] = admin;


  const game = props.location?.state?.game;

  let history = useHistory();


  const deleteGame = () => {
    const url = "https://localhost:5001/games";
    try {
      axios.delete(`${url}/${game.id}`);
      alert(game.title + " er slettet.");
      history.replace("/all-games");
    } catch (e) {
      alert("Whoops, noe gikk galt... Error:" + e)
    }

  }

  return (
      <AdminProvider>

      <section>
        <i className="fas fa-arrow-left"/>
        <h3>{game.title}</h3>

        <Button onClick={() => setConfirmDelete(true)} variant="danger">SLETT</Button>
        { adminState &&
        <Modal show={confirmDelete} onHide={() => setConfirmDelete(!confirmDelete)}>
          <Modal.Header closeButton>
            <Modal.Title>Slette spill</Modal.Title>
          </Modal.Header>
          <Modal.Body>Du holder på å permanent slette <h2>{game.title}</h2> Er du sikker på at du vil
            dette?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setConfirmDelete(false)}>
              Avbryt
            </Button>
            <Button variant="danger" onClick={deleteGame}>Slett</Button>
          </Modal.Footer>
        </Modal>
        }

        <GamesCard {...game}/>
      </section>
      </AdminProvider>
  )
}

export default GameDetail;