import { ADD_CLIENT, UPDATE_CLIENT, REMOVE_CLIENT } from "../types"

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
                if (client.id === action.id) {
                    client.surname = action.surname
                    client.name = action.name
                    client.height = action.height
                    client.weight = action.weight
                    client.bd = action.bd
                    client.phone = action.phone
                }
            }
        )]}
        case REMOVE_CLIENT: 
            return {...state, clients: [...state.clients.filter(
                client => client.id !== action.id
            )]}
        default:
            return state
    }
}