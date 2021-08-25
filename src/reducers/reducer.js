import { ADD_CHILD, REMOVE_NODE, INCREMENT } from "../constants";
//import { ADD_CHILD, REMOVE_NODE, INCREMENT } from "../Action";
import { increment, addChild, removeNode } from "../Action";

export const childIds = (state = childIds, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_CHILD:
      return [...state, action.childId];
    case REMOVE_NODE:
      return state.filter((id) => id !== action.childId);

    default:
      return state;
  }
};
export const counter = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return [...state, (state.counter = state.counter + 1)];
    default:
      return state;
  }
};
