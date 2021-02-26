import { Box, Container, Wrap, WrapItem } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useKeycloak } from "@react-keycloak/web";
import { Card } from "./components/Card/Card";
import { Navbar } from "./components/Navbar/Navbar";
import { Service } from "./types/Service";

function App() {
  const { keycloak } = useKeycloak();

  let dummyServices = [
    {
      id: 1,
      name: "User Service",
      status: true,
    },
    {
      id: 2,
      name: "Server Manager",
      status: false,
    },
  ];

  useEffect(() => {
    if (!keycloak.authenticated) {
      keycloak.login();
    }
  }, [keycloak]);

  return keycloak.authenticated ? (
    <>
      <Navbar />
      <Box as="section" padding="4">
        <Container maxW="container.lg">
          <Wrap spacing="1em" justify="center">
            {dummyServices.map((service: Service) => (
              <WrapItem>
                <Card service={service} />
              </WrapItem>
            ))}
          </Wrap>
        </Container>
      </Box>
    </>
  ) : null;
}

export default App;
