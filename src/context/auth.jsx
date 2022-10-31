import { createContext, useEffect, useReducer, useRef } from "react";
import { getCurrentUser } from "./LS_interact";
import authReducer from "./reducer";

let currentUser;
if(getCurrentUser() !== null){
    currentUser = getCurrentUser()
    console.log(currentUser);
}

export const AuthContext = createContext({})
const AuthProvider = ({children}) =>{
    const [authState, authdispatch]  = useReducer(authReducer, {currentUser: currentUser, authentication: false});
    const count = useRef(0)
    useEffect(() => {
        count.current +=  1;
        
    })

    console.log(`AuthContext nummber of rendering ${count.current}`)

    const logout =() =>{
        console.log("......login out")
        authdispatch({
            type: "LOGOUT"
        })
    }
    

    return (
        <AuthContext.Provider 
            value={{
                authState,
                authdispatch,
                logout 
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider; 
