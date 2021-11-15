import {compose, applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {reducers} from './redux/reducers'



export const store = createStore(reducers, compose(applyMiddleware(thunk)))