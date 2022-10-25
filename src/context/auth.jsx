import { createContext, useEffect, useReducer, useRef } from "react";
import { getCurrentUser } from "./LS_interact";
import authReducer from "./reducer";

let currentUser;
if(getCurrentUser() !== null){
    currentUser = getCurrentUser()
    console.log(currentUser);
}

const initialAuthState = {
    currentUser: currentUser,
    authentication: false
}

export const AuthContext = createContext({})
const AuthProvider = ({children}) =>{

    const [authState, authdispatch]  = useReducer(authReducer, initialAuthState);

    const count = useRef(0)
    useEffect(() => {
        count.current +=  1;
        
    })
    console.log(count.current)

    return (
        <AuthContext.Provider 
            value={{
                authState,
                authdispatch 
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider; 
