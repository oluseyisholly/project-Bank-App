import { createContext, useReducer } from "react";

export const testContext = createContext({})

const addReducer = (action, state) =>{
    switch(action.type){
        case "addNumber":
            return action.num + 1
        case "addNumberByTwo":
            return action.num + 2
        default:
            return state
    }
}



export function Appcontext({children}){

    const [number, numberDispatch] = useReducer(addReducer, 0)
    
    return(
        <testContext.Provider 
            value={{number, numberDispatch }}
        >
            {children}
        </testContext.Provider> 
    )

}
