// Dependencies
import { Link } from "react-router-dom"

// UI Components
import { 
  Container, 
  Nav, 
  Navbar
} from "react-bootstrap"

export const Header = () => (
  <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand as={Link} to="/">New Bank App</Navbar.Brand>
      <Navbar.Toggle aria-controls="header-nav" />
      <Navbar.Collapse id="header-nav" className="justify-content-end">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="login">Login</Nav.Link>
            <Nav.Link as={Link} to="register">Register</Nav.Link>
          </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)