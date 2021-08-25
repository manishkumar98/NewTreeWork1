import {
  ADD_CHILD,
  REMOVE_NODE,
  INCREMENT,
  CREATE_NODE,
  DELETE_NODE
} from "./constants";
export const increment = (nodeId) => ({
  type: INCREMENT,
  nodeId
});
export const addChild = (nodeId, childId) => ({
  type: ADD_CHILD,
  nodeId,
  childId
});

export const removeChild = (nodeId) => ({
  type: REMOVE_NODE,
  nodeId
});
let nextId = 0;
export const createNode = () => ({
  type: CREATE_NODE,
  nodeId: `${nextId++}`
});

export const deleteNode = (nodeId) => ({
  type: DELETE_NODE,
  nodeId
});
