// Dependencies
import { Link } from "react-router-dom"
import { useUser } from "../../contexts/User"

// UI Components
import { AppTitle } from "../../components/common/AppTitle"
import { Button, Container, Row, Col } from "react-bootstrap"

export const Profile = () => {
  // Hooks
  const { user } = useUser()
  return (
  <>
  <AppTitle title="Profile">
    <Link to='/profile/edit'>
      <Button type="button" role="button" variant="light">Edit Profile</Button>
    </Link>
  </AppTitle>
  <Container  className="mt-5">
    <Row>
      <Col xs="12">
        <span>Name: </span>
        <p>{user?.name}</p>
      </Col>
      <Col xs="12">
        <span>Last Name: </span>
        <p>{user?.lastName}</p>
      </Col>
      <Col xs="12">
        <span>Phone number: </span>
        <p>{user?.phone}</p>
      </Col>
      <Col xs="12">
        <span>email: </span>
        <p><a href={`mailto:${user?.email}`}>{user?.email}</a></p>
      </Col>
      <Col xs="12">
        <span>Address: </span>
        <p>{user?.address}</p>
      </Col>
    </Row>
  </Container>
  </>
)}