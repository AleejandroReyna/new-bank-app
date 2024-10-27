// Dependencies
import { Outlet } from "react-router-dom"

// UI Components
import { Header } from "../Header"
import { Container, Row, Col } from "react-bootstrap"
import { Sidebar } from "../Sidebar"

export const Base = () => (
  <div className="base-container">
    <Header />
    <main>
      <Container fluid>
        <Row>   
          <Sidebar />     
          <Col lg={{span: 10, offset: 2}} md={{span: 9, offset: 3}}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </main>
  </div>
)