import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import RootReducer from "./redux/reducers/index";
// import thunkMiddleware from "redux-thunk";
// import ReduxCounter from "./ReduxCounter";
// import ReduxTodo from "./ReduxTodo";

// const store = createStore(RootReducer, applyMiddleware(thunkMiddleware));

// function App() {
//   return (
//     <Provider store={store}>
//       <ReduxCounter />
//       <ReduxTodo />
//     </Provider>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
