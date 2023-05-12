import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// 获取初始化的组件树的根节点FiberRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// 开始将自定义的组件树渲染到FiberRoot上
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

window.root = root;

console.log(
  "组件树的根节点FiberRootNode: 18后被重构成FiberRoot：",
  root._internalRoot
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
