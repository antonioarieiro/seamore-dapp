import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './index.css';
import { MetaMaskProvider } from "metamask-react";
ReactDOM.render(
  <React.StrictMode>
    <MetaMaskProvider>
    <BrowserRouter>
      <App />
      </BrowserRouter>
    </MetaMaskProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
