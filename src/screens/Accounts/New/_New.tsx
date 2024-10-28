// Dependencies
import { useState } from "react"
import { Link } from "react-router-dom"

// UI Components
import { AppTitle } from "../../../components/common/AppTitle"
import { Button, Container, Row, Col, Form, Stack } from "react-bootstrap"

export const New = () => {

  // States
  const [acType, setAcType] = useState<string>('checking')
  const [loading, setLoading] = useState<boolean>(false)

  // Methods
  const submit = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }
  return (
    <>
      <AppTitle title="Create new Account">
        <Link to="/accounts">
          <Button variant="light" role="button">Back to Accounts</Button>
        </Link>
      </AppTitle>
      <Form>
        <Container className="mt-5">
          <Row>
            <Col xs="6">
              <Form.Group className="mt-3">
                <Form.Label>Account Type: </Form.Label>
                <Form.Select 
                  value={acType} 
                  onChange={e => setAcType(e.target.value)}
                  disabled={loading}>
                  <option>Open this select menu</option>
                  <option value="checking">Checking Account</option>
                  <option value="savings">Savings Account</option>
                  <option value="deposit">Deposit Account</option>
                  <option value="credit">Credit Card</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs="6">
              <Stack direction="horizontal" gap={2} className="mt-3">
                <Button disabled={loading} className="ms-auto" variant="light">Cancel</Button>
                <Button disabled={loading} role="submit" onClick={submit}>Save Changes</Button>
              </Stack>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  )
}