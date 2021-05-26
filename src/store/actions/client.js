import { DB } from '../../db'
import { LOAD_CLIENTS, ADD_CLIENT, EDIT_CLIENT, ADD_CLIENT_EX } from "../types"

export const DATA = [
    {
        id: '1',
        name: 'Сергей',
        surname: 'Сергеев',
        ex: []
    },
    {
        id: '2',
        name: 'Иван',
        surname: 'Иванов',
        ex: []
    },
    {
        id: '3',
        name: 'Петр',
        surname: 'Петров',
        ex: []
    }
]

export const loadClients = () => {
    return async dispatch => {
        const clients = await DB.getClients()
        dispatch({
            type: LOAD_CLIENTS,
            payload: clients
        })
    }
}
export const addClient = (data) => async dispatch => {
    const id = await DB.createClient(data)
    data.id = id
    dispatch ({
        type: ADD_CLIENT,
        payload: data
    })
}
export const editClient = (data) => {
    return {
        type: EDIT_CLIENT,
        payload: data
    }
}
export const addClientEx = (data) => {
    return {
        type: ADD_CLIENT_EX,
        payload: data,
    }
}