import { Fragment,  useState } from "react";
import { Container } from "react-bootstrap";
import Input from "../component/input";
import "../assets/style/register.css"
import { registerUser } from "../context/Logic";
import routes from "../routes";
import {Link, useNavigate} from "react-router-dom"


const Register = () =>{
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        gender: "",
        dateOfBirth: "",
        balance: ""
    });
const navigate = useNavigate();

    //const RegisterData = () =>{
    //     set
    // }

    return(
        <Fragment>
            <Container as={'section'} className = {"p-5"} fluid>
                <div className="register-wrapper  p-3 mx-auto">
                    <form method="POST" className=" mt-2 ">
                        <h2 className="text-center fs-1">Register</h2>
                        <div className="d-flex justify-content-between">
                            <div className="mx-1">
                                <Input 
                                    label={'First Name'}
                                    placeholder={'Enter First Name'}
                                    value = {data.firstName}
                                    inputClass = {' register-input  fs-6 bg-light'}
                                    labelClass = {'fs-6 text-center '}
                                    labelShellClass = {"text-center"}
                                    onChange={(firstName) => {
                                        setData({
                                            ...data, firstName
                                        })
                                    }}
                                />
                                <Input 
                                    label={'Email'}
                                    type={'email'}
                                    placeholder = {'Enter Email'}
                                    value = {data.email}
                                    inputClass = {'register-input fs-6 bg-light'}
                                    labelClass = {'fs-6 text-center'}
                                    labelShellClass = {"text-center"}
                                    onChange = {(email) => {
                                        setData({
                                            ...data, email
                                        })
                                    }}
                                />
                                <Input 
                                    label={'Gender'}
                                    type={'select'}
                                    value = {["Gender", "male", 'female']}
                                    inputClass = {'register-input fs-6 bg-light'}
                                    labelClass = {'fs-6 text-center'}
                                    labelShellClass = {"text-center"}
                                    onChange = {(gender) => {
                                        setData({
                                            ...data, gender
                                        })
                                        console.log(data.gender)
                                    }}
                                />
                            </div>
                            <div className="mx-1">
                                <Input 
                                    label={'Last Name'}
                                    type={'text'}
                                    placeholder={'Enter Last Name'}
                                    value = {data.lastName}
                                    inputClass = {' register-input fs-6 bg-light'}
                                    labelClass = {'fs-6 text-center'}
                                    labelShellClass = {"text-center"}
                                    onChange={(lastName) => {
                                        setData({
                                            ...data, lastName
                                        })
                                    }}
                                />
                                <Input 
                                    label={'Password'}
                                    type={'password'}
                                    placeholder = {'Enter Password'}
                                    value = {data.password}
                                    inputClass = {'register-input fs-6 bg-light'}
                                    labelClass = {'fs-6 text-center'}
                                    labelShellClass = {"text-center"}
                                    onChange = {(password) => {
                                        setData({
                                            ...data, password
                                        })
                                    }}
                                />
                                <Input 
                                    label={'Date Of Birth'}
                                    type={'date'}
                                    placeholder = {'Enter Date of Birth'}
                                    value = {data.dateOfBirth}
                                    inputClass = {'register-input fs-6 bg-light'}
                                    labelClass = {'fs-6 text-center'}
                                    labelShellClass = {"text-center"}
                                    onChange = {(dateOfBirth) => {
                                        setData({
                                            ...data, dateOfBirth
                                        })
                                    }}
                                />
                            </div>
                        </div>
                        <Input
                            label={'Initial Deposit'}
                            type={'number'}
                            placeholder = {'Enter Initial Deposit'}
                            value = {data.balance}
                            inputClass = {'register-input fs-6 bg-light'}
                            labelClass = {'fs-6'}
                            labelShellClass = {"text-center"}
                            onChange = {(initialDeposit) => {
                                console.log(initialDeposit);
                                setData({
                                    ...data, balance: initialDeposit
                                })
                            }}
                        />
                        <button 
                            className={"form-control register-btn mx-auto py-2  mt-4"}  
                            onClick = {(e) =>{
                                e.preventDefault();
                                console.log(data)
                                let result = registerUser(data)
                                if(!result){
                                    window.alert(`Email Address Already  exists, Try Another Email `);
                                }
                                else{
                                    navigate(routes.login)
                                }
                            }}
                        >   
                            Sign Up
                        </button>
                    </form>
                    <h5 className="text-center pt-2 fs-6">
                        Already registerd?  <Link to={routes.login}>Login</Link>
                    </h5>
                </div>
            </Container>
        </Fragment> 
        
    )
}

export default Register;