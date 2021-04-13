import React, {useContext} from 'react';
import {AdminContext, AdminProvider} from "../contexts/AdminContext";
import Navbar from "react-bootstrap/cjs/Navbar";
import Nav from "react-bootstrap/Nav";
import NavLogo from '../images/logo-sm.png'
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import "../App.css";


const NavBar = () => {

  const {admin} = useContext(AdminContext);
  const [adminState, setAdminState] = admin;

  return (
      <AdminProvider>
        <Navbar className="navbar">
          <Container>
            <Nav.Link as={Link} to="/"><Navbar.Brand><img src={NavLogo} width="70px" height="70px"/></Navbar.Brand></Nav.Link>
            <Nav fill>
              <Nav.Link as={Link} to="/" className="mr-5">Hjem</Nav.Link>
              <Nav.Link as={Link} to="/all-games" className="mr-5">Spill</Nav.Link>
              <Nav.Link as={Link} to="/all-consoles" className="mr-5">Konsoller</Nav.Link>
            </Nav>
            <h5 className="mr-sm-2">Innlogget som: <Link to="/login">{adminState ? "ADMIN" : "GJEST"}</Link></h5>
          </Container>
        </Navbar>
      </AdminProvider>
  )
}

export default NavBar;