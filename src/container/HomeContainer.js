import { connect } from "react-redux";
import { addChild, removeNode, increment } from "../Action";
//import Node from "./Node";
import Home from "../components/Home";
//import { increment } from "../reducer";
const mapDispatchToProps = (dispatch) => ({
  //Jo bhi data bhejna hai
  incrementHandler: (nodeId) => dispatch(increment(nodeId)),
  addChildHandler: (nodeId, childId) => dispatch(addChild(nodeId, childId)),
  removeNodeHandler: (nodeId) => dispatch(removeNode(nodeId))
});
function mapStateToProps(state) {
  return state;
}
//Jo bhi data lena hai

export default connect(mapStateToProps, mapDispatchToProps)(Home);
