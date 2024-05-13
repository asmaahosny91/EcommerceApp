import { Badge, Container, Nav, Navbar } from "react-bootstrap";


import styles from "./styles.module.css";
import HeaderBasket from "../../ecommerce/HeaderBasket/HeaderBasket";
const { headerContainer, headerLogo } = styles;

const Header = () => {
  return<header>
    <div className={headerContainer}>
        <h1 className={headerLogo}>
          <span>our</span> <Badge bg="info">Ecom</Badge>
        </h1>

        <HeaderBasket />
      </div>
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark" variant="dark" bg="dark">
      <Container>
    
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Categories</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
          </Nav>
          <Nav >
            <Nav.Link href="#home">Login</Nav.Link>
            <Nav.Link href="#link">Categories</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>

  </header> ;
};

export default Header;
