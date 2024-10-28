// Dependencies
import { Link } from "react-router-dom"

// UI Components
import { AppTitle } from "../../components/common/AppTitle"
import { Button, Container, Row, Col } from "react-bootstrap"

export const Profile = () => (
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
        <p>Erick Alejandro</p>
      </Col>
      <Col xs="12">
        <span>Last Name: </span>
        <p>Alvarez Reyna</p>
      </Col>
      <Col xs="12">
        <span>Phone number: </span>
        <p>53535353</p>
      </Col>
      <Col xs="12">
        <span>email: </span>
        <p><a href="mailto:me@alejandroreyna.com">me@alejandroreyna.com</a></p>
      </Col>
      <Col xs="12">
        <span>Address: </span>
        <p>Guatemala City, Guatemala</p>
      </Col>
    </Row>
  </Container>
  </>
)