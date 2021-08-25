import { combineReducers } from "redux";
import { childIds, increment, node } from "./reducer";

export default combineReducers({
  childIds,
  increment,
  node
});
