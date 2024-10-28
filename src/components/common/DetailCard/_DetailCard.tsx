import { Card } from "react-bootstrap"

type DetailCardProps = {
  amount: number
  currency: string
  createdDate: string
  children?: JSX.Element
}

export const DetailCard = ({amount, currency, createdDate, children} : DetailCardProps) => (
  <Card className="mt-5">
    <Card.Body>
      <span>Balance: </span>
      <h1>{currency}. {amount}</h1>
      <p>Created By: {createdDate}</p>
      {children && children}
    </Card.Body>
  </Card>
)