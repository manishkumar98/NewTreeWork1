import { connect } from "react-redux";
import { addChild, removeNode, increment } from "../action";
import Node from "./Node";
//import { increment } from "../reducer";
const mapDispatchToProps = (dispatch) => ({
  //Jo bhi data bhejna hai
  incrementHandler: (data) => dispatch(increment(data)),
  addChildHandler: (data) => dispatch(addChild(data)),
  removeNodeHandler: (data) => dispatch(removeNode(data))
});
function mapStateToProps(state, props) {
  return state[props.id];
}
//Jo bhi data lena hai

export default connect(mapStateToProps, mapDispatchToProps)(Node);
