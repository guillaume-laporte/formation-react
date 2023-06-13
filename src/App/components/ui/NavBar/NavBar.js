import React from 'react';
import PropTypes from 'prop-types';
import style from './NavBar.module.css';
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.css';
// facultatif si non usage des applications js de bootstrap
// attention pour le js pensez à yarn add jquery et import './.../dist/jquery.js'
// import '../../../../../node_modules/bootstrap/dist/js/bootstrap.js';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = (props) => {
  return (
    <div className={style.NavBar} data-testid="NavBar">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#thumbnail">Thumbnail</Nav.Link>
            <Nav.Link href="#newmeme">New meme</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

NavBar.propTypes = {
  
};

export default NavBar;
