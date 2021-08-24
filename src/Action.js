import { ADD_CHILD, REMOVE_NODE, INCREMENT } from "./constants";
export const increment = (nodeId) => ({
  type: INCREMENT,
  nodeId
});
export const addChild = (nodeId, childId) => ({
  type: ADD_CHILD,
  nodeId,
  childId
});

export const removeNode = (nodeId) => ({
  type: REMOVE_NODE,
  nodeId
});
