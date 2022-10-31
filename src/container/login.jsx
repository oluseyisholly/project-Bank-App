import { Fragment, useContext, useState } from "react";
import { Container } from "react-bootstrap";
import Input from "../component/input";
import "../assets/style/login.css"
import {Link, useNavigate} from "react-router-dom"
import { loginUser } from "../context/Logic";
import { AuthContext } from "../context/auth";
import routes from "../routes";

const Login = () =>{
     
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const {authState, authdispatch} = useContext(AuthContext);
    console.log(authState)
    return(
        <Fragment>
            <Container as={'section'} className = {"p-5"} fluid>
                <div className="login-wrapper  p-3 mx-auto">
                    <form className=" mt-4 ">
                    <h2 className="text-center fs-1">Login</h2>
                        <Input 
                            label={'Email'}
                            type={'email'}
                            placeholder={'Enter Email'}
                            value = {data.email}
                            inputClass = {' login-input fs-6'}
                            labelClass = {'fs-6 '}
                            onChange={(email) => {
                                setData({
                                    ...data, email
                                })
                            }}
                        />
                        <Input 
                            label={'Password'}
                            type={'password'}
                            placeholder = {'Enter Password'}
                            value = {data.password}
                            inputClass = {'login-input fs-6'}
                            labelClass = {'fs-6'}
                            onChange = {(password) => {
                                setData({
                                    ...data, password
                                })
                            }}
                        />
                        <button 
                            className={"form-control login-btn mx-auto py-2  mt-4"} 
                            onClick={(e) =>{
                                e.preventDefault();
                                let user = loginUser(data);

                                //Fetcher1(data);
                                if(user){
                                    authdispatch({
                                        type: "LOGIN",
                                        payload: {
                                            currentUser: user  
                                        }
                                    })
                                    console.log(authState);
                                    navigate(routes.dashboard);
                                }
                                else{
                                    window.alert("Invalid Enmail or in-correct password");
                                } 
                            }} 
                        >
                            login
                        </button>
                    </form>
                    <h5 className="text-center fs-6 pt-2">
                        Don't have an account? <Link to={routes.register}>Register</Link>
                    </h5>
                </div>
            </Container>
        </Fragment>
    )
}

export default Login;