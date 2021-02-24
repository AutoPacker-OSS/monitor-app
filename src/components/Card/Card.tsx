import { DownloadIcon } from "@chakra-ui/icons";
import { Box, Button, ButtonGroup, IconButton, Text } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { StatusCode } from "../../elements/StatusCode/StatusCode";
import { Service } from "../../types/Service";

export const Card: FunctionComponent<{ service: Service }> = ({ service }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <StatusCode status={service.status} />
      <Box padding="0 1em 1em 1em" textAlign="center">
        <Text fontSize="2xl">{service.name}</Text>
        <ButtonGroup
          padding="0.5em 0 0 0"
          colorScheme="teal"
          size="md"
          isAttached
          variant="outline"
        >
          <Button>Preview Logs</Button>
          <IconButton aria-label="download logs" icon={<DownloadIcon />} />
        </ButtonGroup>
      </Box>
    </Box>
  );
};
