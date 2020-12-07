import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './Logo.png'
import './Header.css'
const Header = () => {
  return (
    < >
      <Navbar bg="" expand="lg" style={{ padding: '7px 70px' }}>
        <Navbar.Brand href="#home" >
          <Link to="/">
            <img style={{ width: '70px', backgroundColor:'white' }} src={logo} alt="" />
          </Link>
         
        </Navbar.Brand>

      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
      <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: 'white' }} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link className="nav_link" to="/destination">
            <Nav.Link style={{ color: 'white' }} href="destination">Destination</Nav.Link>
          </Link>

          <Nav.Link style={{ color: 'white' }} href="#link">News</Nav.Link>
          <Nav.Link style={{ color: 'white' }} href="#home">Blog</Nav.Link>
          <Nav.Link style={{ color: 'white' }} href="#link">Contact</Nav.Link>

        </Nav>
        <Link to="/login">
          <Button >Login</Button>
        </Link>

      </Navbar.Collapse>
    </Navbar>
    </>
  );
};

export default Header;