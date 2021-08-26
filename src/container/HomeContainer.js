import { connect } from "react-redux";
import { addChild, removeChild, increment } from "../Action";
//import Node from "./Node";
import Home from "../components/Home";
//import { increment } from "../reducer";
const mapDispatchToProps = (dispatch) => ({
  //Jo bhi data bhejna hai
  incrementHandler: (nodeId) => dispatch(increment(nodeId)),
  addChildHandler: (nodeId, childId) => dispatch(addChild(nodeId, childId)),
  removeChildHandler: (nodeId) => dispatch(removeChild(nodeId))
  //delteNodeHandler:(nodeId)=>dispatch(deleteNode(nodeId))
});
function mapStateToProps(state, ownProps) {
  return state;
}
//Jo bhi data lena hai

export default connect(mapStateToProps, mapDispatchToProps)(Home);
/*function mapStateToProps(state, ownProps) {
  return state[ownProps.id];
}

const HomeContainer = connect(mapStateToProps)(Home);
export default HomeContainer;*/
