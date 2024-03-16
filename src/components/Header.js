import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Nav, Navbar, Form } from 'react-bootstrap';
import Logo from "../assests/logo.png";
import { NavDropdown } from 'react-bootstrap';
import "./Header.css";

export function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleSearchBar = () => {
    setIsActive(!isActive);
  };

  return (
    <header>
      <Navbar expand="lg" className="navbar fixed-top">
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto align-items-center">
            <img alt="himg" className='himg' src={Logo} />
            <Nav.Link href="#">HOME</Nav.Link>
            <NavDropdown title="PRODUCTS" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">PRODUCT 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">PRODUCT 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">PRODUCT 3</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="SOLUTIONS" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">SOLUTIONS 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">SOLUTIONS 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">SOLUTIONS 3</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="NEWS & EVENTS" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">NEWS & EVENTS 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">NEWS & EVENTS 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">NEWS & EVENTS 3</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="ABOUT US" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">ABOUT US 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">ABOUT US 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">ABOUT US 3</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">BLOG</Nav.Link>
            <Nav.Link href="#">CONTACT US</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <div className={`searchbar ${isActive ? 'active' : ''}`}>
              <input
                type="search"
                placeholder="Search"
                className="search-input"
              />
            </div>
            <FontAwesomeIcon
              icon={faSearch}
              className="search-icon"
              onClick={toggleSearchBar}
            />
          </Form>
        </Navbar.Collapse>
      </Navbar>
      
    </header>
  );
}
