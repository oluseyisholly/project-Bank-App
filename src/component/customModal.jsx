import React from "react"
import { Button, Modal } from "react-bootstrap"
import Input from "./input"


 const CustomModal = ({
    title,
    data,
    setData,
    show = false,
    setShowModal,
    handleDeposit,
}) =>{
    return(
        <Modal onHide={() => setShowModal(false)} show = {show} >
            <Modal.Header>
                <Modal.Title>
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Input
                    placeholder={"Amount"}
                    value = {data.depositAmount}
                    type = {"number"}
                    onChange = {(depositAmount) => {
                        setData({
                            ...data,
                            depositAmount
                        });
                    }}
                />
                <Input
                    placeHolder={"Description"}
                    value = {data.description}
                    onChange={(description) => {
                        setData({
                            ...data,
                            description,
                        });
                    }}
                />
            </Modal.Body>

            <Modal.Footer>
                <Button variant = "primary" onClick={() => handleDeposit()}>
                    SaveChanges
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CustomModal