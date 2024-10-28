// Dependencies
import { Link } from "react-router-dom"

// UI Components
import { AppTitle } from "../../../components/common/AppTitle"
import { Button, Container, Row, Col, Card, Badge, Stack } from "react-bootstrap"

export const List = () => {
  return (
    <>
      <AppTitle title="Account List">
        <Link to="/accounts/new">
          <Button type="button" role="button" variant="light">Create Account</Button>
        </Link>
      </AppTitle>
      <Container className="mt-5">
        <Row>
          <Col lg={6}>
            <Card>
              <Card.Header>
                <Stack direction="horizontal" gap={2}>
                  <h6>Saving Account: A-000456747</h6>
                  <Badge bg="primary" className="ms-auto">Active</Badge>
                </Stack>
              </Card.Header>
              <Card.Body>
                <h2>Q. 1,500.00</h2>
              </Card.Body>
              <Card.Footer>
                <Stack direction="horizontal" gap={2}>
                  <p>Created by: Aug 13, 2020</p>
                  <Link to="/accounts/1"  className="ms-auto">
                    <Button size="sm">See Details</Button>
                  </Link>
                </Stack>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg={6}>card here</Col>
          <Col lg={6}>card here</Col>
          <Col lg={6}>card here</Col>
        </Row>
      </Container>
    </>
  )
}