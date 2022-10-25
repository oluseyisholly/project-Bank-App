import {getAllUsers, getCurrentUser, setCurrentUser, setRegData} from "./LS_interact"

const registerUser = (payload) =>{
    const regData = {...payload, transactiondata:[]}
    const allregData = getAllUsers();
    let foundItem;
    if(allregData !== null){
        foundItem = allregData.find((item) =>{
            return regData.email === item.email;
        })
    }
    if(foundItem === undefined){
        setRegData(regData);
    }
    return false;
} 

const loginUser = (payload) =>{
    const regData = payload;
    const allregData = getAllUsers();
    let foundItem;
    if(allregData !== null){
        foundItem = allregData.find((item) =>{
            return regData.email === item.email && regData.password === item.password;
        })
    }
    console.log(allregData)
    if(foundItem){
        setCurrentUser(foundItem); 
        return foundItem
    }
    return null;
}

const autoLogin = () =>{
     const currentUser = getCurrentUser();
     if(currentUser){
        return "/dashboard"
     }
     return "/login"
}

const depositHandler = (payload) =>{
    const currentUser = getCurrentUser();
    //const allUsers = getAllUsers();
    console.log(payload);
    let balance = parseFloat(currentUser.balance)
    balance += parseFloat(payload.amount);
    console.log(payload.amount)
    currentUser.balance = balance;
    console.log(currentUser.balance)
    setCurrentUser(currentUser);
    return currentUser;
}


export  {registerUser};
export {loginUser};
export {autoLogin};
export {depositHandler};

 