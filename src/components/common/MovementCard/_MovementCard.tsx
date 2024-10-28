// UI Components
import {Row, Col, Card } from "react-bootstrap"

type MovementCardProps = {
  id: string
  movementType: 'credit' | 'debit'
  date: string
  senderId: string
  receiverId: string
  amount: number
  details?: string
  currency: string
}

export const MovementCard = ({id, movementType, date, senderId, receiverId, amount, details, currency} : MovementCardProps) => (
  <Card className="mt-3">
        <Card.Header><h5>Movement No. {id}</h5></Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <strong>Movement Type: </strong><span>{movementType}</span><br />
              <strong>Date: </strong><span>{date}</span>
              </Col>
            <Col>
              <strong>From: </strong><span>{senderId}</span><br />
              <strong>To: </strong><span>{receiverId}</span>
            </Col>
            <Col>
              <strong>Amount: </strong><span className={movementType == 'credit' ? "text-success" : 'text-danger'}>{currency}. {amount}</span><br />
              {details &&            
                <p><strong>Details: </strong>{details}</p>
              }
            </Col>
          </Row>
        </Card.Body>
      </Card>
)