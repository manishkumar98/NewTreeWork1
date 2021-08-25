import React from "react";
import { childIds } from "../reducers/reducer";
import { addChild, removeNode, increment } from "../Action";

export default function Home(props) {
  console.log(props);
  //{counter,nodeId,childIds}=props
  return (
    <>
      <div>Counter:{}</div>
    </>
  );
}
