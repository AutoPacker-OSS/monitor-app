import Keycloak from "keycloak-js";

// Setup Keycloak instance as needed
const keycloak = new Keycloak({
	realm: "AutoPackerRealm",
	url: process.env.REACT_APP_KEYCLOAK_URL + "/auth/",
	clientId: "monitor-app",
});

export default keycloak;
