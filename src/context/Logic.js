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
        return regData;
    }
    return null;
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

const setTransactionData = (payload, action) =>{
    let transactiondata = getCurrentUser().transactiondata;     
    let transaction = {
        type: action === "DEPOSIT" ? "CREDIT" : "DEBIT",
        date: getDate().presentDate,
        description: payload.description,
        amount: payload.amount,
        time: getDate().time
    }
    transactiondata.push(transaction);
    return transactiondata;
}

const getDate = () =>{
    const months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "october", "November", "December"]
    let date = new Date();
    let year = date.getFullYear();
    let month = months[date.getMonth()-1]; 
    let day = date.getDate();
    
    return{
        presentDate : [day, month, year].join(", "),
        time : date.toLocaleTimeString()
    }
}

const depositHandler = (payload, actionType) =>{
    const currentUser = getCurrentUser();
    //const allUsers = getAllUsers();
    let balance = parseFloat(currentUser.balance)
    balance += parseFloat(payload.amount);
    currentUser.balance = balance;

    //set transaction data into the local storage
    let transactionData = setTransactionData(payload, actionType)
    currentUser.transactiondata = transactionData;
    
    //---------------------------------------
    setCurrentUser(currentUser);
    return currentUser; 
}

const  withdrawHandler = (payload, actionType) =>{
    const currentUser = getCurrentUser();
    //const allUsers = getAllUsers();
    let balance = parseFloat(currentUser.balance)
    if(balance >= payload.amount){
        balance -= parseFloat(payload.amount);
        currentUser.balance = balance;

        //set transaction data into the local storage
        let transactionData = setTransactionData(payload, actionType)
        currentUser.transactiondata = transactionData;
        console.log(currentUser);
        //---------------------------------------
        setCurrentUser(currentUser);
    }
    else{
        alert("INSUFFICIENT BALANCE");
    }
    
    return currentUser; 
}

// export async function Fetcher1(payload){
//     console.log(payload);
//    const res =  await fetch("https://localhost:7258/api/Account/Login",
//     {
//         headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//         },
//         method: "POST",
//         body: JSON.stringify({
//             userName: payload.email, 
//             password: payload.password
//         })
//     }).then((res) => res.json())
//         .then((res) => {
//             console.log(res);
//         })


//     // const resp = await res.json()
//     // console.log(resp);
    
// }



export  {registerUser};
export {loginUser};
export {autoLogin};
export {depositHandler};
export {withdrawHandler};
 