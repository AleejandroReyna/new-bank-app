// Dependencies
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useUser } from "../../../contexts/User"

// UI Components
import { AppTitle } from "../../../components/common/AppTitle"
import { Button, Container, Row, Col, Form, Stack } from "react-bootstrap"

export const Edit = () => {
  // Hooks
  const { user, editUser } = useUser()

  // States
  const [name, setName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [address, setAddress] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  // Effects
  useEffect(() => {
    if(user) {
      setName(user.name)
      setLastName(user.lastName)
      setPhone(user.phone)
      setEmail(user.email)
      setAddress(user.address)
    }
  }, [user])


  // Methods
  const submit = () => {
    setLoading(true)
    setTimeout(() => {
      editUser({name, lastName, phone, email, address})
      setLoading(false)
    }, 2000)
  }
  return (
    <>
      <AppTitle title="Edit Profile">
        <Link to='/profile'>
          <Button type="button" role="button" variant="light">Back to Profile</Button>
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