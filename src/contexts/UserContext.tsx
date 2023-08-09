import React, { createContext, useReducer } from 'react';
import { initialstate, UserReducer } from '../reducers/UserReducer';

export const UserContext = createContext();

export default ({children}) => {
    const [state, dispatch] = useReducer(UserReducer, initialstate)
    return (
        <UserContext.Provider value={{state, dispatch}}>
            { children }
        </UserContext.Provider>
    )

}