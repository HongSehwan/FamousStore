import navStyles from "../styles/nav.module.css";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";

const NavMenu = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className={navStyles.logo} href="/">
                    <p style={{ marginBottom: 7 }}>AWESOME FOOD STORE</p>
                </Navbar.Brand>
                <Nav>
                    <Row bg="light">
                        <Col>
                            <Nav.Item>
                                <Nav.Link className={navStyles.about} href="/">
                                    About
                                </Nav.Link>
                            </Nav.Item>
                        </Col>
                        <Col>
                            <Nav.Item>
                                <Nav.Link className={navStyles.store} href="/stores">
                                    Store
                                </Nav.Link>
                            </Nav.Item>
                        </Col>
                    </Row>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavMenu;
