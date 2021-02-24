import { FunctionComponent } from "react";
import { Text, Box } from "@chakra-ui/react";
import { CheckCircleIcon, WarningTwoIcon } from "@chakra-ui/icons";

export const StatusCode: FunctionComponent<{ status: boolean }> = ({
  status,
}) => {
  return (
    <Box
      fontSize="4xl"
      display="flex"
      alignItems="baseline"
      justifyContent="center"
    >
      <Box color={status ? "green.400" : "red.400"} alignSelf="center">
        {status ? <CheckCircleIcon /> : <WarningTwoIcon />}
      </Box>
      <Text
        padding="0.25em 0 0 0.25em"
        fontWeight="bold"
        color={status ? "green.400" : "red.400"}
      >
        {status ? "ON" : "OFF"}
      </Text>
    </Box>
  );
};
