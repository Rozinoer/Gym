import {LOAD_CLIENTS, ADD_CLIENT} from '../types'

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
        default:
            return state
    }
}