import { createStore, combineReducers, applyMiddleware, compose, Action } from 'redux'
import { appReducer, feedReducer, userReducer} from './reducers'
import thunkMw from 'redux-thunk'
import { ThunkAction } from 'redux-thunk'


const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  feed: feedReducer,
})


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMw)))

export default store




// types
type RootReducerType = typeof rootReducer
export type RootState = ReturnType<RootReducerType>
export type InferActions<T> = T extends {[key: string]: (...args: any[]) => infer U} ? U : never
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, RootState, unknown, A>