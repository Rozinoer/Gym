import {LOAD_CLIENTS, ADD_CLIENT, EDIT_CLIENT} from '../types'

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
        default:
            return state
    }
}