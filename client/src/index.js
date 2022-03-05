import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import store from "./container/store";

// import img from "https://technocashierautomatedproduct.herokuapp.com/assets/pic.png";
// import logo from "https://technocashierautomatedproduct.herokuapp.com/assets/logo-green.png";
// import bg from "https://technocashierautomatedproduct.herokuapp.com/assets/background.jpg";

// console.log(img);
// console.log(logo);
// console.log(bg);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

console.log(store.getState());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
