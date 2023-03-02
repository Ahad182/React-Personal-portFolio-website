import { createContext,useReducer } from "react";



export const themeContext = createContext();
const inicialState = {darkmode : false};

export const themeReduserFunction = (state,action)=>{
    switch(action.type){
        case "toggle":
            return {darkmode: !state.darkmode}
        default:
            return state
    };
        
};

export const ThemeProvider = (props)=>{
    const [state, dispatch] = useReducer(themeReduserFunction,inicialState)
    return (
        <themeContext.Provider value={{state, dispatch}}>
            {props.children}
        </themeContext.Provider>
    );
};