import {compose, applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {rootReducers} from './redux/reducers'



export const store = createStore(rootReducers, compose(applyMiddleware(thunk)))