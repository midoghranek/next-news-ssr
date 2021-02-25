import { ADD_POSTS } from "states/actions";
import { initialState } from "states/store";

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_POSTS:
      return {
        ...state,
        posts: [...state.posts, ...payload],
      };
    default:
      return state;
  }
};
