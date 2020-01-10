import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducer from "./reducer"
import secondReducer from "./secondReducer"


const rootReducer = combineReducers({first: reducer, second: secondReducer})


const store = createStore(rootReducer, compose(
    applyMiddleware(thunk), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ))




export default store