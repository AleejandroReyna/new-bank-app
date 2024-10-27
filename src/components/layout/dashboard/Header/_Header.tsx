// Dependencies
import { Link } from "react-router-dom"

// UI Components
import { 
  Nav, 
  Navbar,
  Container
} from "react-bootstrap"

export const Header = () => (
  <Navbar as={'header'} bg="dark" data-bs-theme="dark" sticky="top">
    <Container fluid>
      <Navbar.Brand as={Link} to="/accounts">Hello: Alejandro</Navbar.Brand>
      <Nav className="ms-auto">    
        <Nav.Link as={Link} to="/">Logout</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
)