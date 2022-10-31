import React, { useContext,  useState } from "react";
import {Container, Col, Row, Button} from "react-bootstrap"
import "../assets/style/dashboard.css"
import CustomCard from "../component/customCard";
import { AuthContext } from "../context/auth";
import images from "../img";
import "../assets/style/dashboard.css"
import CustomModal from "../component/customModal";
import TransactionTable from "../component/customTable";

const Dashboard = () =>{
    const {authState, authdispatch} = useContext(AuthContext);
    const balance = authState.currentUser.balance
    const name = `${authState.currentUser.firstName} ${authState.currentUser.lastName}`
    const transactionData = authState.currentUser.transactiondata
    const [showDeposit, setShowDeposit] = useState(false);
    const [showWithdraw, setShowWithdraw] = useState(false);
    const [amountData, setAmountData] = useState("");
    const [descriptionData, setDescriptionData] = useState("");
    
    const handleWithdraw = () =>{
        authdispatch({
            type: "WITHDRAW",
            payload: {
                amount: amountData || 0,
                description: descriptionData
            }
        })
        
    }
    const handleDeposit = () =>{
        authdispatch({
            type: "DEPOSIT",
            payload: {
                amount: amountData || 0,
                description: descriptionData,
            }
        })
        console.log(descriptionData, amountData)
    }

    return(
        <React.Fragment>
            <Container  as={"section"} className={"bg-color "}  fluid>
                <Row  style ={{height: "100vh"}}>
                    <Col lg={2} className={"h-100"} style ={{background: "grey"}}>
                        <div className="d-flex flex-column align-items-center mx-3 pt-2">
                            <img className={"avatar-size"} src={images.avatar} alt="avatar of user"/>
                            <div>
                                <h3 className="pt-2 fs-5">Welcome,</h3>
                                <h3 className=" fs-5">{name}</h3>
                            </div>
                        </div>
                    </Col>
                    <Col >
                        <CustomCard cardClassName={"mt-3 box-shadow-general"}>
                            <h1 className="text-center">Current Balance: N{balance}</h1>
                        </CustomCard>
                        <div className="box-shadow-general">
                            <TransactionTable
                                className={"overflow-scroll bg-white mt-5"}
                                transactionData={transactionData}
                            />
                        </div>
                    </Col>
                    <Col  lg={2} style ={{background: "blue", height: "100%"}}>
                        <div>
                            <Button className={"bgColor-dark"} onClick={() => setShowDeposit(true)}>
                                Deposit
                            </Button>
                            <CustomModal
                                title = "Make Your Deposits"
                                amountData = {amountData}
                                descriptionData = {descriptionData}
                                setAmountData = {setAmountData}
                                setDescriptionData= {setDescriptionData}
                                setShowModal = {setShowDeposit}
                                show = {showDeposit}
                                handleDeposit = {handleDeposit}
                            />
                        </div>
                        <div>
                            <Button className={""} onClick={() => setShowWithdraw(true)}>
                                Withdraw
                            </Button>
                            <CustomModal
                                title = "Make Your Deposits"
                                amountData = {amountData}
                                descriptionData = {descriptionData}
                                setAmountData = {setAmountData}
                                setDescriptionData= {setDescriptionData}
                                setShowModal = {setShowWithdraw}
                                show = {showWithdraw}
                                handleDeposit = {handleWithdraw}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Dashboard;