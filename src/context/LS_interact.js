
const setRegData = (regData) =>{
    let initialData = JSON.parse(localStorage.getItem("allUsers"));
    if(initialData !== null){
        initialData.push(regData);
        initialData = JSON.stringify(initialData);
    }
    localStorage.setItem("allUsers", initialData || JSON.stringify([regData]));

}
const setCurrentUser = (currentUser) => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser))
}

const getAllUsers = () =>{
    return JSON.parse(localStorage.getItem("allUsers"));
}

const getCurrentUser = () =>{
    return JSON.parse(localStorage.getItem("currentUser"));
}

export   {setRegData, setCurrentUser, getAllUsers, getCurrentUser};
