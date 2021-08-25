import React from "react";
import { childIds } from "../reducers/reducer";
import * as actions from "../Action";
import HomeContainer from "../container/HomeContainer";

function addChildHandler() {
  // e.preventDefault();
  const { addChild, createNode, id } = this.props;
  const childId = createNode().nodeId;
  addChild(id, childId);
}
function removeNodeHandler() {
  const { removeChild, deleteNode, parentId, id } = this.props;
  removeChild(parentId, id);
  deleteNode(id);
}
function incrementHandler() {
  const { increment, id } = this.props;
  increment(id);
}
function renderChild() {
  const { childId, id } = this.props;
  return (
    <li key={childId}>
      <HomeContainer id={childId} parentId={id} />
    </li>
  );
}

export default Home = (props) => {
  console.log(props);
  const { counter, nodeId, childIds, parentId } = props;
  return (
    <>
      <div>Counter:{counter}</div>
      <button onClick={incrementHandler}>+</button>
      <a onClick={removeNodeHandler}>x</a>
      <ul>
        {childIds.map(renderChild)}
        <li>
          <a href="#" onClick={addChildHandler}>
            Add child
          </a>
        </li>
      </ul>
    </>
  );
};
