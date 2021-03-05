import { DownloadIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Tr,
  useToast,
} from "@chakra-ui/react";
import React, { FunctionComponent, useEffect, useState } from "react";
import { StatusCode } from "../../elements/StatusCode/StatusCode";
import { Service } from "../../types/Service";
import {
  getLogsPreview,
  downloadLogs,
  checkHealth,
} from "../../services/logs/actions";
import { useKeycloak } from "@react-keycloak/web";
import fileDownload from "js-file-download";

export const Card: FunctionComponent<{ service: Service }> = ({ service }) => {
  const [serviceStatus, setServiceStatus] = useState<boolean>(undefined);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [data, setData] = useState<string[]>([]);

  const [keycloak] = useKeycloak();
  const toast = useToast();

  const previewLogs = async () => {
    const logResult = await getLogsPreview(keycloak.token, service);
    if (logResult.status !== 200) {
      setServiceStatus(false);
      toast({
        title: "An error occurred.",
        description: `Unable to fetch preview logs for service: ${service.name}`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    setServiceStatus(true);
    setData(logResult.data);
    setOpenModal(true);
  };

  const download = async () => {
    const file = await downloadLogs(keycloak.token, service);
    if (file.status !== 200) {
      setServiceStatus(false);
      toast({
        title: "An error occurred.",
        description: `Unable to fetch preview logs for service: ${service.name}`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    setServiceStatus(true);
    fileDownload(file.data, service.name + ".log");
  };

  useEffect(() => {
    (async () => {
      const healthStatus = await checkHealth(keycloak.token, service);
      if (healthStatus.data.status !== "UP") {
        console.log("SHOULD BE 3 TIMES");
        setServiceStatus(false);
        return;
      }
      setServiceStatus(true);
    })();
  }, [keycloak.token, service]);

  return (
    <>
      {serviceStatus !== undefined ? (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Box padding="0 1em">
            <StatusCode status={serviceStatus} />
          </Box>
          <Box padding="0 1em 1em 1em" textAlign="center">
            <Text fontSize="2xl">{service.name}</Text>
            <ButtonGroup
              padding="0.5em 0 0 0"
              colorScheme="teal"
              size="md"
              isAttached
              variant="outline"
            >
              <Button onClick={previewLogs}>Preview Logs</Button>
              <IconButton
                onClick={download}
                aria-label="download logs"
                icon={<DownloadIcon />}
              />
            </ButtonGroup>
          </Box>
        </Box>
      ) : (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}

      {openModal ? (
        <Modal
          onClose={() => setOpenModal(false)}
          isOpen={openModal}
          isCentered
          size="6xl"
          scrollBehavior="inside"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{service.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Table size="sm">
                <Tbody>
                  {data.map((line: string) => (
                    <Tr>
                      <Td>{line}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => setOpenModal(false)}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      ) : null}
    </>
  );
};
