import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import Tree from "./Tree";
import reducer from "./reducer";
const rootElement = document.getElementById("root");

const store = createStore(Tree, reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
