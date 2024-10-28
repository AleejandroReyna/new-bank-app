// Dependencies
import { Link } from "react-router-dom"

// UI Components
import { AppTitle } from "../../../components/common/AppTitle"
import { Button, Container, Row, Col, Badge, Card } from "react-bootstrap"

export const Detail = () => {
  return (
    <>
      <AppTitle title={`Saving Account: A-0000345678`}>
        <h4><Badge bg="primary">Active</Badge></h4>
      </AppTitle>
      <Card className="mt-5">
        <Card.Body>
          <span>Balance: </span>
          <h1>Q. 1,500.00</h1>
          <p>Created By: Aug 20, 2020</p>
          <Button>Transfer</Button>
        </Card.Body>
      </Card>
      <h3 className="mt-5">Movements</h3>
      <Card className="mt-3">
        <Card.Body>
          <Row>
            <Col>
              <strong>Movement Type: </strong><span>Credit</span><br />
              <strong>Date: </strong><span>Aug 20, 2020</span>
              </Col>
            <Col>
              <strong>From: </strong><span>A-123456789</span><br />
              <strong>To: </strong><span>A-0000345678</span>
            </Col>
            <Col>
              <strong>Amount: </strong><span className="text-success">Q. 1,500.00</span><br />
              <p><strong>Details: </strong>Some details about the transaction here. more than about it.</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card  className="mt-3">
        <Card.Body>
          <Row>
            <Col><strong>Movement Type: </strong><span>Debit</span></Col>
            <Col>
              <strong>From: </strong><span>A-123456789</span><br />
              <strong>To: </strong><span>A-0000345678</span>
            </Col>
            <Col>
              <strong>Amount: </strong><span className="text-danger">Q. 1,500.00</span>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  )
}