import {
  Box,
  Container,
  Flex,
  Spinner,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { FunctionComponent, useEffect, useState } from "react";
import { useKeycloak } from "@react-keycloak/web";
import { Card } from "./components/Card/Card";
import { Navbar } from "./components/Navbar/Navbar";
import { Service } from "./types/Service";
import axios from "axios";

export const App: FunctionComponent = () => {
  // State
  const [serverManagerLogs, setServerManagerLogs] = useState<string[]>([]);

  const [keycloak] = useKeycloak();

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

  // TODO Move this to a service class
  useEffect(() => {
    axios
      .get("http://localhost:8082/actuator/server/logs/preview", {
        method: "GET",
        headers: {
          Authorization:
            keycloak.token !== null ? `Bearer ${keycloak.token}` : undefined,
        },
      })
      .then((response: any) => {
        setServerManagerLogs(response.json());
      })
      .catch(() => {
        console.log("ERROR");
      });
  }, []);

  return keycloak.authenticated ? (
    <>
      <Navbar />
      {keycloak.realmAccess?.roles.includes("ADMIN") ? (
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
      ) : null}{" "}
      {/* TODO Show some GUI element that describes that the user does not have access */}
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
