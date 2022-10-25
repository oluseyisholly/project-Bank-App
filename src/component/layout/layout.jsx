import { Fragment } from "react";
import { authroutes } from "../../routes"
import Nav from "../nav";


const Layout = ({children}) =>{

    if(authroutes.indexOf(window.location.pathname) !== -1){
        return <section> {children }</section>;
    }

    return(
        <Fragment>
            <Nav name={"Banking App"}/>
            {children}
        </Fragment>
    )
}

export default Layout;