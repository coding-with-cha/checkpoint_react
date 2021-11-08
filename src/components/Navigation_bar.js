import React from 'react'
import {Container, Nav, NavDropdown, Form, FormControl, Button, Navbar} from 'react-bootstrap';
import './Navigation_bar_style.css'

const Navigation_bar = () => {
    return (
        <div>
             <Navbar bg="light" expand="lg" className="navbar">
  <Container fluid>
    <Navbar.Brand href="#" className="brandName">Sprinkles Bakery</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav className="navbar-links"
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1" className="lien">Home</Nav.Link>
        <Nav.Link href="#action2" className="lien">About</Nav.Link>
        <NavDropdown title="Our Cakes" id="navbarScrollingDropdown" className="lien">
          <NavDropdown.Item href="#action3">Chocolate Cake</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Macaron Cake</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
          More Options
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled className="lien">
          Contact
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl id="champ"
          type="search"
          placeholder="Search..."
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Navigation_bar
