import { Fragment, useRef, useEffect } from "react";
import { Col } from "react-bootstrap";
import { authroutes } from "../../routes"
import Nav from "../nav";


const Layout = ({children}) =>{

    const count = useRef(0)
    useEffect(() => {
        count.current +=  1;
        
    })
    console.log(`layout rendering ${count.current}`);
    

    if(authroutes.indexOf(window.location.pathname) !== -1){
        console.log("Login");
        
        return <section> {children}</section>;
    }
    console.log("Dashboard and Layouts");
    return(
        <Fragment>
            <Col>
                <Nav navClassName={"bg-dark"} name={"Banking App"}/>
            </Col>
            {children}
        </Fragment>
    )
}

export default Layout;