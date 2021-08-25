import {combineReducers} from 'redux'
import loginreducer from './LoginReducer';
const mainReducer=combineReducers({
    state:loginreducer
})

export default mainReducer;