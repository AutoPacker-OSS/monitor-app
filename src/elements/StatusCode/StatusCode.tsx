import { FunctionComponent, useState, useEffect } from "react";
import { Text, Box } from "@chakra-ui/react";
import {
  CheckCircleIcon,
  WarningTwoIcon,
  QuestionIcon,
} from "@chakra-ui/icons";

type StatusObj = {
  icon: JSX.Element | undefined;
  color: string | undefined;
  text: string | undefined;
};

export const StatusCode: FunctionComponent<{ status?: boolean }> = ({
  status,
}) => {
  const [statusObj, setStatusObj] = useState<StatusObj>({
    icon: undefined,
    color: undefined,
    text: undefined,
  });

  useEffect(() => {
    switch (status) {
      case true:
        setStatusObj({
          icon: <CheckCircleIcon />,
          color: "green.400",
          text: "ON",
        });
        break;

      case false:
        setStatusObj({
          icon: <WarningTwoIcon />,
          color: "red.400",
          text: "OFF",
        });
        break;

      default:
        setStatusObj({
          icon: <QuestionIcon />,
          color: "yellow.400",
          text: "UNKNOWN",
        });
        break;
    }
  }, [status]);

  return (
    <Box
      fontSize="4xl"
      display="flex"
      alignItems="baseline"
      justifyContent="center"
    >
      <Box color={statusObj.color} alignSelf="center">
        {statusObj.icon}
      </Box>
      <Text
        padding="0.25em 0 0 0.25em"
        fontWeight="bold"
        color={statusObj.color}
      >
        {statusObj.text}
      </Text>
    </Box>
  );
};
