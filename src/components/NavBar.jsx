import React from "react";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";

const NavBar = () => {

  const CartWidget = () => {
    return (
      <div className="position-relative">
        <i className="bi bi-cart-fill fs-5 text-light"></i>
        <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle">
          3 
        </Badge>
      </div>
    );
  };


  const ItemListContainer = ({ greeting }) => {
    return (
      <div
        className="text-center mt-3 p-2 bg-light border rounded shadow-sm"
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#f4f2e9",
          borderColor: "#a8b48d",
        }}
      >
        <h4 className="text-success">{greeting}</h4> 
      </div>
    );
  };

  return (
    <Navbar
      bg="dark" 
      expand="lg"
      variant="dark"
      className="shadow-sm"
      style={{ backgroundColor: "#60492c" }} 
    >
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src="/Images/logo.png"
            alt="Re-Circular"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
          />
          <span className="fw-bold text-light">Re-Circular</span> 
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link href="#home" className="text-light fw-medium">
              Inicio
            </Nav.Link>
            <Nav.Link href="#shop" className="text-light fw-medium">
              Tienda
            </Nav.Link>
            <Nav.Link href="#about" className="text-light fw-medium">
              Nosotros
            </Nav.Link>
            <Nav.Link href="#contact" className="text-light fw-medium">
              Contacto
            </Nav.Link>

            <Nav.Link href="#cart" className="position-relative">
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div className="mt-3">
          <ItemListContainer greeting="¡Bienvenido a Re-Circular!" />
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;