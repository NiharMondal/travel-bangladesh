import React from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <Navbar bg="" expand="lg">
        <Navbar.Brand href="#home">
          <Link
            to="/"
            style={{ textDecoration: "none", color: "white", fontSize: "28px" }}
          >
            Travel Guru
          </Link>
        </Navbar.Brand>

        <Form inline className="search_box">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ backgroundColor: "white" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="nav_link" to="/destination">
              <Nav.Link style={{ color: "white" }} href="destination">
                Destination
              </Nav.Link>
            </Link>

            <Link className="nav_link" to="/news">
              <Nav.Link style={{ color: "white" }} href="#news">
                News
              </Nav.Link>
            </Link>
            <Link className="nav_link" to="/blog">
              <Nav.Link style={{ color: "white" }} href="#blog">
                Blog
              </Nav.Link>
            </Link>
            <Link className="nav_link" to="/contact">
              <Nav.Link style={{ color: "white" }} href="#contact">
                contact
              </Nav.Link>
            </Link>
          </Nav>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
