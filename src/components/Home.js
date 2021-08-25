import React from "react";
import { childIds } from "../reducers/reducer";
import * as actions  from "../Action";

handleChildClick(){
  e.preventDefault();
 
}
handleDeleteClick(){

}
handleIncrementClick(){

}
renderChild(){

}


const Home=(props) =>{
  console.log(props);
  const {counter,nodeId,childIds,parentId}=props
  return (
    <>
      <div>Counter:{counter}</div>
      <button onClick={props.incrementHandler({})}>+</button>
      <a onClick={handleDeleteClick}>x</a>
      <ul>
        {childIds.map(renderChild)}
        <li>
          <a onClick={handleChildClick}>Add child</a>
        </li>
      </ul>
    </>
  );
}
