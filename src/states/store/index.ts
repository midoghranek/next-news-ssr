import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { PostType } from "types";
export interface Store {
  posts: PostType[];
}

export const initialState: Store = {
  posts: [],
};

const middleware = [thunk];

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
