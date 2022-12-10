import React from "react";
import {Container, Navbar, Nav, Button} from "react-bootstrap";
import logo from "../../utils/imgs/logo.svg";
import {DiGithubBadge} from "react-icons/di";
import {BiMenuAltRight} from "react-icons/bi";

const Header = () => {
  return (
    <header>
      <Navbar expand="md" className="p-3">
        <Container>
          <Navbar.Brand href="#">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <BiMenuAltRight size={35} className="nav-toggle-icon" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="#">Documentation</Nav.Link>
              <Nav.Link href="https://github.com/omar1Mayallo" target="_blank">
                <Button className="nav-btn">
                  Github <DiGithubBadge className="nav-btn-icon" />
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
