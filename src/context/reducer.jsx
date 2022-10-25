//import { depositHandler } from "./Logic"

const depositHandler = (payload, state) =>{
    //const currentUser = getCurrentUser();
    //const allusers = getAllUsers();
    console.log(payload, state);
    let balance = parseFloat(state.balance)
    balance += parseFloat(payload.amount);
    console.log(payload.amount)
    state.balance = balance;
    console.log(state.balance)
    return state.balance
    //setCurrentUser(currentUser);
}

const authReducer = (state, action) =>{
    switch(action.type){
        case "LOGIN":
            return {
                ...state, authentication: true, currentUser: action.payload.currentUser
            }
        case "DEPOSIT":
            depositHandler(action.payload, state)
            console.log(state.action, action.payload.amount)
            return {
                ...state, balance: (parseFloat(state.balance) + parseFloat(action.payload.amount)).toString()
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