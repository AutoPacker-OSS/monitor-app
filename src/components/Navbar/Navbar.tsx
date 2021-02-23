import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, useColorMode } from "@chakra-ui/react";
import { FunctionComponent } from "react";

export const Navbar: FunctionComponent = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = { light: "white", dark: "gray.800" };

  return (
    <Box bg={bg[colorMode]} px={4} borderBottomWidth="1px" width="full">
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box d="block" aria-label="dashboard">
          AutoPacker Monitor
        </Box>
        <Flex align="right" color="gray.500">
          <IconButton
            aria-label={`Switch to ${
              colorMode === "light" ? "dark" : "light"
            } mode`}
            variant="ghost"
            color="current"
            ml="2"
            fontSize="20px"
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          />
        </Flex>
      </Flex>
    </Box>
  );
};
