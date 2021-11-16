import { combineReducers } from "redux";

import postReducer from "../reducers/posts"

export const rootReducers = combineReducers({
    posts:postReducer
})

  
  export type RootState = ReturnType<typeof rootReducers>