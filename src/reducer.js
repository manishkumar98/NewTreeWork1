import { ADD_CHILD, REMOVE_NODE, INCREMENT } from "./constants";

export function childId(state, action) {
  switch (action.type) {
    // console.lod(action)
    case ADD_CHILD:
      return [...state, action.childId];
    case REMOVE_NODE:
      return state.filter((id) => id !== action.childId);

    default:
      return state;
  }
}
export function increment(state, action) {
  switch (action.type) {
    case INCREMENT:
      return [...state, (action.counter = action.counter + 1)];
    default:
      return state;
  }
}
