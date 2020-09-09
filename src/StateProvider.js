import React, { createContext, useContext, useReducer } from "react";

// preparing data layer
export const StateContext = createContext();


// wrapper for app to provide the data layer
//this must be very cool but i just wanna know what its happening inside


export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>

);

//pull info from data layer
export const useStateValue = () => useContext(StateContext);