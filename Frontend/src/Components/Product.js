

export const StateContext=createContext();

export const StateProvider=(cartItems,{children})=>{

    <StateContext.Provider value={cartItems}>
       {children}
    </StateContext.Provider>
    
}











