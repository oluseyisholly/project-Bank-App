import React from "react";
import { Table } from "react-bootstrap";

const TransactionTable = ({
    transactionData,
    className
}) =>{

    return(
        <React.Fragment>
            <Table className={className} striped bordered hover size="sm">
                <thead className="text-center">
                    <tr>
                        <th colSpan={5}>
                           <h3>Transactions</h3>
                        </th>
                    </tr>
                    <tr >
                        <th>Type</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                {
                    transactionData.slice(0, 9).map((transaction, index) =>{
                        let cellColor = transaction.type === "CREDIT"? "bg-color-green": "bg-color-red"
                        return(
                            <tr className={"text-center"}key={index}>
                                <td className ={`text-white ${cellColor}`}>{transaction.type}</td>
                                <td>{transaction.description}</td> 
                                <td>{transaction.date}</td>
                                <td>{transaction.time}</td>
                                <td>{transaction.amount}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>
        </React.Fragment>
        
)}
    


export default TransactionTable;