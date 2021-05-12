import React, { useReducer } from 'react'
import { ADD_CLIENT, UPDATE_CLIENT, REMOVE_CLIENT } from '../types';
import { ClientContext } from './clientContext';
import { clientReducer } from './clientReducer'

export const ClientState = ({ children }) => {
    const initialState = {
        clients: []
    }
    const [state, dispatch] = useReducer(clientReducer, initialState)

    const addClient = (client) => dispatch({type: ADD_CLIENT, client})

    const editClient = (client) => dispatch({type: UPDATE_CLIENT, client})

    const removeClient = (client) => dispatch({type: ADD_CLIENT, client})

    return <ClientContext.Provider value={{
        clients: state.clients,
        addClient, editClient
    }}>
        {children}
    </ClientContext.Provider>
}