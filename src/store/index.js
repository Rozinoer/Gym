import {createStore, combineReducers} from 'redux'
import {clientReducer} from './reducers/client'

const rootReducer = combineReducers({
    client: clientReducer
})

export default createStore(rootReducer)