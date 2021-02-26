import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";

// Keycloak
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak";

/**
 * login-required will authenticate the client if the user
 * is logged-in to Keycloak or display the login page if not.
 */
const keycloakProviderInitConfig = {
  onLoad: "login-required",
};

ReactDOM.render(
  <ReactKeycloakProvider
    authClient={keycloak}
    initOptions={keycloakProviderInitConfig}
  >
    <React.StrictMode>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </ReactKeycloakProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
