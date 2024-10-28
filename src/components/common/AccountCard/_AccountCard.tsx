// Dependencies
import { Link } from "react-router-dom"

// UI Components
import { Button, Card, Badge, Stack } from "react-bootstrap"

// Props
type AccountCardProps = {
  id: number
  accountName: string
  status: 'active' | 'canceled'
  currency: string
  amount: number
  createdDate: string
}

export const AccountCard = ({id, accountName, status, currency, amount, createdDate} : AccountCardProps) => (
  <Card>
    <Card.Header>
      <Stack direction="horizontal" gap={2}>
        <h6>Saving Account: {accountName}</h6>
        <Badge bg={status === 'active' ? "primary" : "danger"} className="ms-auto">{status}</Badge>
      </Stack>
    </Card.Header>
    <Card.Body>
      <h2>{currency}. {amount}</h2>
    </Card.Body>
    <Card.Footer>
      <Stack direction="horizontal" gap={2}>
        <p>Created by: {createdDate}</p>
        <Link to={`/accounts/${id}`} className="ms-auto">
          <Button size="sm">See Details</Button>
        </Link>
      </Stack>
    </Card.Footer>
  </Card>
)