import {createStore} from 'redux'
import reducer from './reducer.js'

const initComments = []

const store = createStore(reducer, initComments)
export default store