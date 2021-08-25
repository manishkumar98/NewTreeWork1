import { combineReducers } from "redux";
import { childIds, increment } from "./reducer";

export default combineReducers({
  childIds,
  increment
});
