import {createStore} from 'redux'
import reducer from './reducer.js'

const state = {
    comments: []
}

const store = createStore(reducer, state)
export default store