import { depositHandler } from "./Logic"


const authReducer = (state, action) =>{
    switch(action.type){
        case "LOGIN":
            console.log('login');
            return {
                ...state, authentication: true, currentUser: action.payload.currentUser
            }
        case "DEPOSIT":
            let currentUser = depositHandler(action.payload)
            console.log( action.payload.amount)
            return {
                ...state, currentUser
            }
        case "WITHDRAW":    
            return {

            } 
        default:
            return {
                ...state
            }                
    }
}

export default authReducer;