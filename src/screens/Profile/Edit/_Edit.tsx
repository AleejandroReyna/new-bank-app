// Dependencies
import { useState } from "react"
import { Link } from "react-router-dom"

// UI Components
import { AppTitle } from "../../../components/common/AppTitle"
import { Button, Container, Row, Col, Form, Stack } from "react-bootstrap"

export const Edit = () => {

  // States
  const [name, setName] = useState<string>("Erick Alejandro")
  const [lastName, setLastName] = useState<string>("Alvarez Reyna")
  const [phone, setPhone] = useState<string>("53535353")
  const [email, setEmail] = useState<string>("me@alejandroreyna.com")
  const [address, setAddress] = useState<string>("Guatemala City, Guatemala")
  const [loading, setLoading] = useState<boolean>(false)

  // Methods
  const submit = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }
  return (
    <>
      <AppTitle title="Edit Profile">
        <Link to='/profile'>
          <Button type="button" role="button">Back to Profile</Button>
        </Link>
      </AppTitle>
      <Form>
        <Container className="mt-5">
          <Row>
            <Col xs="6">
              <Form.Group className="mt-3">
                <Form.Label>Name: </Form.Label>
                <Form.Control
                  disabled={loading}
                  type="text" 
                  placeholder="Your name here" 
                  onChange={e => setName(e.target.value)} 
                  value={name} />
              </Form.Group>
            </Col>
            <Col xs="6">
              <Form.Group className="mt-3">
                <Form.Label>Last Name: </Form.Label>
                <Form.Control 
                  disabled={loading}
                  type="text" 
                  placeholder="Your last name here" 
                  onChange={e => setLastName(e.target.value)} 
                  value={lastName} />
              </Form.Group>
            </Col>
            <Col xs="6">
              <Form.Group className="mt-3">
                <Form.Label>Phone number: </Form.Label>
                <Form.Control 
                  disabled={loading}
                  type="phone" 
                  placeholder="Your phone number here" 
                  onChange={e => setPhone(e.target.value)} 
                  value={phone} />
              </Form.Group>
            </Col>
            <Col xs="6">
              <Form.Group className="mt-3">
                <Form.Label>email: </Form.Label>
                <Form.Control 
                  disabled={loading}
                  type="email" 
                  placeholder="Your email here" 
                  onChange={e => setEmail(e.target.value)} 
                  value={email} />
              </Form.Group>
            </Col>
            <Col xs="12">
              <Form.Group className="mt-3">
                <Form.Label>Address: </Form.Label>
                <Form.Control 
                  disabled={loading}
                  as="textarea" 
                  rows={3} 
                  onChange={e => setAddress(e.target.value)}
                  value={address} />
              </Form.Group>
            </Col>
            <Col>
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