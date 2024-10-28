// Dependencies
import { Link } from "react-router-dom"
import { useUser } from "../../../../contexts/User"

// UI Components
import { 
  Nav, 
  Navbar,
  Container
} from "react-bootstrap"

export const Header = () => {
  const { user } = useUser()
  return (
  <Navbar as={'header'} bg="dark" data-bs-theme="dark" sticky="top">
    <Container fluid>
      <Navbar.Brand as={Link} to="/accounts">Hello: {user?.name} {user?.lastName}</Navbar.Brand>
      <Nav className="ms-auto">    
        <Nav.Link as={Link} to="/">Logout</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
)}