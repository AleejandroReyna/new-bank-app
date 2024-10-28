// Dependencies
import { Link } from "react-router-dom"

// UI Components
import { AppTitle } from "../../../components/common/AppTitle"
import { Button, Badge, Card } from "react-bootstrap"
import { DetailCard } from "../../../components/common/DetailCard"
import { MovementCard } from "../../../components/common/MovementCard"

export const Detail = () => {
  return (
    <>
      <AppTitle title={`Saving Account: A-0000345678`}>
        <h4><Badge bg="primary">Active</Badge></h4>
      </AppTitle>
      
      <DetailCard
        amount={1500}
        currency="Q"
        createdDate="Aug 20, 2020">
          <Button>Transfer</Button>
      </DetailCard>
      
      <h3 className="mt-5 mb-3">Movements</h3>

      <div className="mb-3">
        <MovementCard
          id="M-00004535"
          movementType="credit"
          date="Aug 20, 2020"
          senderId="A-000045678"
          receiverId="A-6789483"
          currency="Q"
          amount={1500}
        />
      </div>
      

      <div className="mb-3">
        <MovementCard
          id="M-00004535"
          movementType="debit"
          date="Aug 20, 2020"
          senderId="A-000045678"
          receiverId="A-6789483"
          currency="Q"
          amount={1500}
          details="I forgot it"
        />
      </div>
    </>
  )
}