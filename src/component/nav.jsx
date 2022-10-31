import { useContext } from "react";
import {  Col, Container, Row } from "react-bootstrap";
import {Link} from "react-router-dom"
import { AuthContext } from "../context/auth";
import routes from "../routes";

const Nav = ({ name, navClassName }) => {

    const {logout} = useContext(AuthContext)
  return (
    <Container as={"section"} className={` ${navClassName}`}  fluid>
        <Row className="">
        <Col className="d-flex flex-row pe-3 justify-content-between align-items-center" >
            <p className="ps-2 mt-2 fs-3 d-inline-block fw-bolder text-white link-nav">{name}</p>
            <Link onClick={() =>{
                 logout()
                 window.location.href =(routes.login)
                 }}
                 className={"text-white fw-bold link-nav"}
            >
                Logout
            </Link>
        </Col>
        </Row>
    </Container>
  );
};

export default Nav;
