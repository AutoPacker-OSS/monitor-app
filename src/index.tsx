import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";

// Keycloak
import { KeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak";

ReactDOM.render(
  <KeycloakProvider
    keycloak={keycloak}
    initConfig={{
      onLoad: "login-required",
    }}
  >
    <React.StrictMode>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </KeycloakProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
