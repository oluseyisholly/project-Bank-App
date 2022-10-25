import React, { useContext, useEffect, useRef, useState } from "react";
import {Container, Col, Row, Button} from "react-bootstrap"
import "../assets/style/dashboard.css"
import CustomCard from "../component/customCard";
import { AuthContext } from "../context/auth";
import images from "../img";
import "../assets/style/dashboard.css"
import CustomModal from "../component/customModal";

const Dashboard = () =>{
    const {authState, authdispatch} = useContext(AuthContext);
    const balance = authState.balance 
    console.log(authState);
    const name = `${authState.currentUser.firstName} ${authState.currentUser.lastName}`

    const [show, setShow] = useState(false);
    const [data, setData] = useState({
        depositAmount: "",
        description: ""
    })

    const handleDeposit = () =>{
        authdispatch({
            type: "DEPOSIT",
            payload: {
                amount: data.depositAmount,
                description: data.description
            }
        })
    }
    const count = useRef(0)
    useEffect(() => {
        count.current +=  1;
        
    })
    console.log(count.current)
    return(
        <React.Fragment>
            <Container as={"section"} fluid>
                <Row style={{heigth: "100vh"}}>
                    <Col  lg={2} style ={{background: "grey", height: "20rem"}}>
                        <div className="d-flex flex-column align-items-center mx-3 pt-2">
                            <img className={"avatar-size"} src={images.avatar} alt="avatar of user"/>
                            <div>
                                <h3 className="pt-2 fs-5">Welcome,</h3>
                                <h3 className=" fs-5">{name}</h3>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <CustomCard cardClassName={"mt-3"}>
                            <h1 className="text-center">Current Balance: N{balance}</h1>
                        </CustomCard>
                    </Col>
                    <Col  lg={2} style ={{background: "blue"}}>
                        
                        <div>
                            <Button className={""} onClick={() => setShow(true)}>
                                Deposit
                            </Button>
                            <CustomModal
                                title = "Make Your Deposits here"
                                data = {data}
                                setData = {setData}
                                setShowModal = {setShow}
                                show = {show}
                                handleDeposit = {handleDeposit}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Dashboard;