import { createContext, useReducer } from "react";
import { getCurrentUser } from "./LS_interact";
import authReducer from "./reducer";

if(getCurrentUser() !== null){
    const balance = getCurrentUser().balance
    console.log(balance);
}

const initialAuthState = {
    currentUser: getCurrentUser(),
    authentication: false,
    balance: balance
}

export const AuthContext = createContext({})
const AuthProvider = ({children}) =>{

    const [authState, authdispatch]  = useReducer(authReducer, initialAuthState);

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
