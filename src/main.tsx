import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { RecoilRoot } from "recoil";
import App from "./components/App";

const porcentageH = 10;
const porcentageV = 1;

const GlobalStyles = createGlobalStyle`
body {
  background-color: #282c34;
  color: white;
  font-size: calc(10px + 2vmin);
  margin: ${porcentageV}vh ${porcentageH}vw ${porcentageV}vh ${porcentageH}vw;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
