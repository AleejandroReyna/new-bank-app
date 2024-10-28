// UI Components
import { Link } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import { CenteredTron } from "../../components/common/CenteredTron"
import { Button } from "react-bootstrap"

export const Home = () => (
    <Container>
        <Row>
            <Col xs lg={{ span: 6, offset: 3}}>
                <CenteredTron
                    title="The new way to do transactions online"
                    content="We made your life easy">
                    <>
                        <Button href="#" className="me-1" size="lg" variant="light">Learn more</Button>
                        <Link to="login">
                            <Button  size="lg">Login</Button>
                        </Link>
                    </>
                </CenteredTron>
            </Col>
        </Row>
    </Container>
)