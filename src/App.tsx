import {
  Box,
  Container,
  Flex,
  Spinner,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useKeycloak } from "@react-keycloak/web";
import React, { FunctionComponent } from "react";
import { Card } from "./components/Card/Card";
import { Navbar } from "./components/Navbar/Navbar";
// Data
import { services } from "./services";
import { Service } from "./types/Service";

export const App: FunctionComponent = () => {
  const [keycloak] = useKeycloak();

  return keycloak.authenticated ? (
    <>
      <Navbar />
      {keycloak.realmAccess?.roles.includes("ADMIN") ? (
        <Box as="section" padding="4">
          <Container maxW="container.xl">
            <Wrap spacing="1em" justify="center">
              {services.map((service: Service) => (
                <WrapItem>
                  <Card service={service} />
                </WrapItem>
              ))}
            </Wrap>
          </Container>
        </Box>
      ) : null}{" "}
    </>
  ) : (
    <Flex height="100vh" justifyContent="center" alignItems="center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Flex>
  );
};

export default App;
