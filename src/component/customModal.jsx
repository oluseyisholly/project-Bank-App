import React from "react"
import { Button, Modal } from "react-bootstrap"
import Input from "./input"


 const CustomModal = ({
    title,
    amountData,
    descriptionData,
    setAmountData,
    setDescriptionData,
    show = false,
    setShowModal,
    handleDeposit,
}) =>{
    return(
        <Modal className="w-75" onHide={() => setShowModal(false)} show = {show} >
            <Modal.Header>
                <Modal.Title>
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Input
                    placeholder={"Amount"}
                    value = {amountData}
                    type = {"number"}
                    onChange = {(amountData) => {
                        setAmountData(amountData);
                    }}
                />
                <Input
                    placeholder={"Description"}
                    value = {descriptionData}
                    onChange={(descriptionData) => {
                        setDescriptionData(descriptionData);
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