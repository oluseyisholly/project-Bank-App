import { depositHandler, withdrawHandler } from "./Logic"


const authReducer = (state, action) =>{
    let currentUser;
    switch(action.type){
        case "LOGIN":
            console.log('login');
            return {
                ...state, authentication: true, currentUser: action.payload.currentUser
            }
        case "DEPOSIT":
            currentUser = depositHandler(action.payload, action.type)
            console.log(currentUser)
            return {
                ...state, currentUser
            }
        case "WITHDRAW":   
        console.log(action.payload) 
            currentUser = withdrawHandler(action.payload, action.type)
            return {
                ...state, currentUser
            }
        case "LOGOUT" :
            return{
                ...state, authentication: false
            }
        default:
            return {
                ...state
            }                
    }
}

export default authReducer;