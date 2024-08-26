import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

(function () {
    const component = "index.js Module content";
    document.getElementById("div2").innerHTML = component;
})();

const div3  = document.getElementById('div3');
const reactDOM = ReactDOM.createRoot(div3);
reactDOM.render(<App />)
