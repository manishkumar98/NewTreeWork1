import "./styles.css";
//import { createStore } from "react-redux";
//import { Provider } from "react-redux";
//import reducer from "./reducer";
//import { combineReducer } from "redux";
//import index from "./reducers/index"
//import Tree from "./Tree";
//import Home from "./components/Home";
import HomeContainer from "./container/HomeContainer";
export default function App() {
  //const tree = Tree();

  //const store = createStore(reducer, tree);
  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <HomeContainer />
      </div>
    </>
  );
}
