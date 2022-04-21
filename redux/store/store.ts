import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { composeWithDevTools } from "redux-devtools-extension";


 const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, logger))
  );
 
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
