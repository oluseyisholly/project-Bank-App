import { Col, Container, Row } from "react-bootstrap";
import {Link} from "react-router-dom"
import routes from "../routes";

const Nav = ({ name }) => {
  return (
    <Container as={"section"} fluid>
        <Row className="justify-content-between">
        <Col lg={8}>
            <p className="ps-5">{name}</p>
        </Col>
        <Col>
            <Link to={routes.register}>Register</Link>
        </Col>
        <Col>
            <Link to={routes.dashboard  }>Dashboard</Link>
        </Col>
        <Col>
            <Link to={routes.login }>Logout</Link>
        </Col>
        </Row>
    </Container>
  );
};

export default Nav;
