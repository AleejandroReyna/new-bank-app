// Dependencies
import { useState } from "react"
import { MockLogin } from "../../../utils/services/mocks/login"

// UI Components
import { Link } from "react-router-dom"
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap"

export const Login = () => {
    
    // States
    const [user, setUser] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    // Actions
    const submit = async () => {
        setLoading(true)
        try {
            const response = await MockLogin(user, password)
            console.log('r', response)
        } catch (err) {
            console.log('e', err)
        }
        finally {
            setLoading(false)
        }
    }
    
    return (
        <div className="my-auto">
            <Container>
                <Row>
                    <Col xs="12" lg={{span: 6, offset: 3}}>
                    <Card>
                        <Card.Header>
                            <h4 className="h4">Login</h4>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={submit}>
                                <Form.Group className="mb-3" controlId="login.username">
                                    <Form.Label>Username: </Form.Label>
                                    <Form.Control 
                                        disabled={loading}
                                        type="text" 
                                        placeholder="ex: PokemonKing"
                                        value={user}
                                        onChange={e => setUser(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="login.password">
                                    <Form.Label>Password: </Form.Label>
                                    <Form.Control 
                                        disabled={loading}
                                        type="password" 
                                        placeholder="Your password here..."
                                        value={password}
                                        onChange={e => setPassword(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="text-end">
                                    <Link to="/">
                                        <Button variant="light">Cancel</Button>
                                    </Link>
                                    <Button 
                                        disabled={loading || !user || !password} type="button" 
                                        className="ms-2"
                                        onClick={submit}>Login</Button>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                        <Card.Footer className="text-center">
                            <p>If you want to register, <Link to="/register">Click here</Link>.</p>
                        </Card.Footer>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
)
}