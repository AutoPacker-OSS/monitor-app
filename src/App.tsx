import { Box, Container, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import { Card } from "./components/Card/Card";
import { Navbar } from "./components/Navbar/Navbar";
import { Service } from "./types/Service";

function App() {
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

  return (
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
  );
}

export default App;
