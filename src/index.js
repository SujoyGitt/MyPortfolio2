import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from "./App";
import Navbar from './Component/Navbar/Navbar';

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <Navbar/>
    <App />
  </>
);
let languageIcon = document.querySelector('.language-icon');
let drawerContent = document.querySelector('.drawer-content');

languageIcon.addEventListener('click', function() {
  drawerContent.classList.toggle('show-drawer');
});