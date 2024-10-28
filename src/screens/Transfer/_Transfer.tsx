// Dependencies
import { useState } from "react"

// UI Components
import { AppTitle } from "../../components/common/AppTitle"
import { Button, Container, Row, Col, Form, Stack } from "react-bootstrap"

export const Transfer = () => {
  // States
  const [loading, setLoading] = useState<boolean>(false)
  const [senderId, setSenderId] = useState<string>("")
  const [receiverId, setReceiverId] = useState<string>("")
  const [amount, setAmount] = useState<number>(0)
  const [details, setDetails] = useState<string>("")

  // Actions
  const submit = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  const DummyValues = [
    'A-00000000',
    'A-00000001',
    'A-00000002',
    'A-00000003'
  ]

  return (
    <>
      <AppTitle title="Make a transfer" />
      <Form>
        <Container className="mt-5">
          <Row>
            <Col xs="6">
              <Form.Group className="mt-3">
                <Form.Label>From: </Form.Label>
                <Form.Select 
                  value={senderId} 
                  onChange={e => setSenderId(e.target.value)}
                  disabled={loading}>
                  <option value="">Open this select menu</option>
                  {DummyValues.map(item =>
                    <option value={item}>{item}</option>
                  )}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs="6">
              <Form.Group className="mt-3">
                <Form.Label>To: </Form.Label>
                <Form.Select 
                  value={receiverId} 
                  onChange={e => setReceiverId(e.target.value)}
                  disabled={loading || !senderId}>
                  <option value="">Open this select menu</option>
                  {DummyValues.filter(item => item != senderId).map(item =>
                    <option value={item}>{item}</option>
                  )}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs="12">
              <Form.Group className="mt-3">
                <Form.Label>Amount: </Form.Label>
                <Form.Control
                  disabled={loading || !receiverId || !senderId} 
                  type="number" 
                  value={amount} 
                  onChange={e => setAmount(Number(e.target.value))} />
              </Form.Group>
            </Col>
            <Col xs="12">
              <Form.Group className="mt-3">
                <Form.Label>Details: </Form.Label>
                <Form.Control
                  disabled={loading || !receiverId || !senderId || !amount} 
                  as="textarea"
                  rows={3}
                  value={details} 
                  onChange={e => setDetails(e.target.value)} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <Stack direction="horizontal" gap={2} className="mt-3">
                <Button disabled={loading} className="ms-auto" variant="light">Cancel</Button>
                <Button disabled={loading || !receiverId || !senderId || !amount} role="submit" onClick={submit}>Transfer</Button>
              </Stack>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  )
}