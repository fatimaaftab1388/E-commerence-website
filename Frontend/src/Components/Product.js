import { useContext, createContext, Children } from "react";

import { cartItems } from './abaya';
import Cart from "./cartdetail";

export const StateContext=createContext();

export const StateProvider=({children})=>{
    
    return(
    <StateContext.Provider value={cartItems}>
       {children}
    </StateContext.Provider>
    )
}







