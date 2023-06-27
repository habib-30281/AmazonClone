import React, { createContext, useContext, useReducer } from "react";

//prepares the Data Layer
export const StateContext = createContext();

//wrap our app and provider the data layer to every layer inside our component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pull information from the data layer
export const useStateValue = () => useContext(StateContext);
