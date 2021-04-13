import React, {useState} from 'react';
import axios from 'axios';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import Row from "react-bootstrap/Row";

const ConsoleDetail = (props) => {

  const [confirmDelete, setConfirmDelete] = useState(false);

  const {name, release, manufacturer, price, image} = props.location?.state?.console;


  const deleteConsole = () => {
    const url = "https://localhost:5001/consoles";
    try {
      axios.delete(`${url}/${console.id}`);
      alert(console.title + " er slettet.")

    } catch (e) {
      alert("Whoops, noe gikk galt... Error:" + e)
    }

  }

  return (
      <section>
        <h3>Info about some console</h3>
        <p>Lets delete this shit</p>
        <input onClick={() => setConfirmDelete(true)} type="button" value="Slett konsoll"/>

        <Modal show={confirmDelete} onHide={() => setConfirmDelete(!confirmDelete)}>
          <Modal.Header closeButton>
            <Modal.Title>Slette spill</Modal.Title>
          </Modal.Header>
          <Modal.Body>Du holder på å permanent slette <h2>{console.name}</h2> Er du sikker på at du vil
            dette?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setConfirmDelete(false)}>
              Avbryt
            </Button>
            <Link to="/all-games"><Button variant="danger" onClick={deleteConsole}>Slett</Button></Link>
          </Modal.Footer>
        </Modal>
        <Row xs={ 3 } sm={ 3 } md={ 3 } lg={ 3 } xl={ 3 }>

        </Row>

      </section>
  )
}

export default ConsoleDetail;