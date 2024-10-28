// Dependencies
import { Link } from "react-router-dom"

// UI Components
import { AppTitle } from "../../../components/common/AppTitle"
import { Button, Container, Row, Col } from "react-bootstrap"
import { AccountCard } from "../../../components/common/AccountCard"

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
          <Col lg={6} className="mb-3">
            <AccountCard
              id={1}
              accountName="A-00234567"
              status="active"
              currency="Q"
              amount={1500}
              createdDate="Aug 20, 2020" />
          </Col>
          <Col lg={6}>
          <AccountCard
              id={1}
              accountName="A-00234567"
              status="canceled"
              currency="Q"
              amount={1500}
              createdDate="Aug 20, 2020" />
          </Col>
          <Col lg={6} className="mb-3">
            <AccountCard
              id={1}
              accountName="A-00234567"
              status="active"
              currency="Q"
              amount={1500}
              createdDate="Aug 20, 2020" />
          </Col>
          <Col lg={6}>
          <AccountCard
              id={1}
              accountName="A-00234567"
              status="canceled"
              currency="Q"
              amount={1500}
              createdDate="Aug 20, 2020" />
          </Col>
        </Row>
      </Container>
    </>
  )
}