import React, { useReducer } from 'react'
import { ADD_CLIENT } from '../types';
import { ClientContext } from './clientContext';
import {clientReducer} from './clientReducer'

export const ClientState = ({ children }) => {
    const initialState = {
        clients: []
    }
    const [state, dispatch] = useReducer(clientReducer, initialState)

    const addClient = (client) => dispatch({type: ADD_CLIENT, client})

    return <ClientContext.Provider value={{
        clients: state.clients,
        addClient
    }}>
        {children}
    </ClientContext.Provider>
}