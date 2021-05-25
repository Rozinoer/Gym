import { ADD_CLIENT } from "../../context/types"
import { LOAD_CLIENTS } from "../types"
export const DATA = [
    {
        id: '1',
        name: 'Сергей',
        surname: 'Сергеев'
    },
    {
        id: '2',
        name: 'Иван',
        surname: 'Иванов'
    },
    {
        id: '3',
        name: 'Петр',
        surname: 'Петров'
    }
]

export const loadClients = () => {
    return {
        type: LOAD_CLIENTS,
        payload: DATA
    }
}
export const addClient = (data) => {
    data.id = Date.now().toString()
    return {
        type: ADD_CLIENT,
        payload: data
    }
}