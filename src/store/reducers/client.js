import {LOAD_CLIENTS, ADD_CLIENT, EDIT_CLIENT, ADD_CLIENT_EX} from '../types'

const initialState = {
    allClients: []
}

export const clientReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CLIENTS:
            return {...state, allClients: action.payload}
        case ADD_CLIENT:
            return {...state, allClients: [...state.allClients,
            {
               ...action.payload
            }
        ]}
        case EDIT_CLIENT:
            return {...state, allClients: state.allClients.map(
                client => {
                    if (client.id === action.payload.id)
                    {
                        client.name = action.payload.name
                        client.surname = action.payload.surname
                        client.phone = action.payload.phone
                    }
                    return client
                }
            )}
        case ADD_CLIENT_EX:
            return {...state, allClients: [...state.allClients.map(
                client => {
                    if (client.id === action.payload.clientId) {
                        client.ex = [...client.ex, {
                            name: action.payload.name,
                            id: action.payload.id,
                            weight: action.payload.weight,
                            approaches: action.payload.approaches,
                            repetitions: action.payload.repetitions,
                            rest: action.payload.rest
                        }]
                    }
                    return client
                }
            )]}
        default:
            return state
    }
}