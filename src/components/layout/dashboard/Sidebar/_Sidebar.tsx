// Dependencies
import { Link } from "react-router-dom"

// UI Components
import { Nav } from "react-bootstrap"

// Styles
import './Sidebar.styles.css'

export const Sidebar = () => (
  <Nav id="app-navbar" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
    <aside className="position-sticky pt-3">
      <Nav as="nav" className="flex-column">
        <span className="sidebar-heading  px-3 mt-4 mb-1 text-muted">User</span>
        <Nav.Item>
          <Nav.Link as={Link} to="/profile"><i className="bi bi-person"></i> Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  as={Link} to="/profile/Edit"><i className="bi bi-person-gear"></i> Edit Profile</Nav.Link>
        </Nav.Item>
        <span className="sidebar-heading  px-3 mt-4 mb-1 text-muted">Accounts</span>
        <Nav.Item>
          <Nav.Link as={Link} to="/accounts"><i className="bi bi-person-vcard"></i> My Accounts</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  as={Link} to="/accounts/new"><i className="bi bi-plus-circle"></i> New Account</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  as={Link} to="/transfer"><i className="bi bi-cash"></i> Transfer</Nav.Link>
        </Nav.Item>
      </Nav>
    </aside>
  </Nav>
)