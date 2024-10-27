// UI Components
import { Link } from "react-router-dom"
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap"

export const Login = () => (
    <div className="my-auto">
        <Container>
            <Row>
                <Col xs="12" lg={{span: 6, offset: 3}}>
                <Card>
                    <Card.Header>
                        <h4 className="h4">Login</h4>
                    </Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="login.username">
                                <Form.Label>Username: </Form.Label>
                                <Form.Control type="text" placeholder="ex: PokemonKing" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="login.password">
                                <Form.Label>Password: </Form.Label>
                                <Form.Control type="password" placeholder="Your password here..." />
                            </Form.Group>
                            <Form.Group className="text-end">
                                <Link to="/">
                                    <Button variant="light">Cancel</Button>
                                </Link>
                                <Button type="submit" className="ms-2">Login</Button>
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