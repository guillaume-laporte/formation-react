import React from 'react';
import PropTypes from 'prop-types';
import style from './NavBar.module.css';
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.css';
// facultatif si non usage des applications js de bootstrap
// attention pour le js pensez à yarn add jquery et import './.../dist/jquery.js'
// import '../../../../../node_modules/bootstrap/dist/js/bootstrap.js';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = (props) => {
  return (
    <div className={style.NavBar} data-testid="NavBar">
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/home">
            <Navbar.Brand href="/home">Home</Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            { /* <Link to="/thumbnail" className='nav-link'>Thumbnail</Link> */}
            { /* <Link to="/editor" className='nav-link'>New</Link> */}
            { /* <Link to="/editor/1" className='nav-link'>Editor id 1</Link> */}
            <LinkContainer to="/thumbnail">
              <Nav.Link href="/thumbnail">Thumbnail</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/meme">
              <Nav.Link href="/meme">New</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/meme/1">
              <Nav.Link href="/meme/1">Edit id:1</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

NavBar.propTypes = {
  
};

export default NavBar;
