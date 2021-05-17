import { ADD_CLIENT, UPDATE_CLIENT, REMOVE_CLIENT, ADD_EX, ADD_CLIENT_EX } from "../types"

export const clientReducer = (state, action) => {
    switch (action.type) {
        case ADD_CLIENT: 
            return {...state, clients: [...state.clients, {
                id: Date.now().toString(),
                surname: action.client.surname,
                name: action.client.name,
                height: action.client.height,
                weight: action.client.weight,
                bd: action.client.data,
                phone: action.client.phone,
                ex: []
            }]}
        case UPDATE_CLIENT: 
            return {...state, clients: [...state.clients.map(
                client => {
                    if (client.id === action.client.id) {
                        client.surname = action.client.surname
                        client.name = action.client.name
                        client.height = action.client.height
                        client.weight = action.client.weight
                        client.bd = action.client.bd
                        client.phone = action.client.phone
                    }
                    return client
                }
            )]}
        case REMOVE_CLIENT: 
            return {...state, clients: [...state.clients.filter(
                client => client.id !== action.id
            )]}
        case ADD_EX:
            return {...state, ex: [...state.ex, {
                name: action.ex,
                id: Date.now().toString()
            }]}
        case ADD_CLIENT_EX:
            return {...state, clients: [...state.clients.map(
                client => {
                    if (client.id === action.ex.clientId) {
                        client.ex = [...client.ex, {
                            name: action.ex.name,
                            id: action.ex.id,
                            clientId: action.ex.clientId,
                            weight: action.ex.weight,
                            repeat: action.ex.repeat,
                            times: action.ex.times,
                            rest: action.ex.rest
                        }]
                    }
                    return client
                }
            )]}
        default:
            return state
    }
}