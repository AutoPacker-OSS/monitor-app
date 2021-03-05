import axios from "axios";
import { Service } from "../../types/Service";

export const getLogsPreview = async (
  token: string,
  service: Service
): Promise<any> => {
  return await axios
    .get(service.serviceUrl + "/logs/preview", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response: any) => {
      return {
        status: response.status,
        message: "success",
        data: response.data,
      };
    })
    .catch((error: any) => {
      return {
        status: error.status,
        message: "error",
        data: error,
      };
    });
};

export const downloadLogs = async (
  token: string,
  service: Service
): Promise<any> => {
  return await axios
    .get(service.serviceUrl + "/logs", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: "blob",
    })
    .then((response: any) => {
      return {
        status: response.status,
        message: "success",
        data: response.data,
      };
    })
    .catch((error: any) => {
      return {
        status: error.status,
        message: "error",
        data: error,
      };
    });
};

export const checkHealth = async (
  token: string,
  service: Service
): Promise<any> => {
  return await axios
    .get(service.serviceUrl + "/health", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response: any) => {
      return {
        status: response.status,
        message: "success",
        data: response.data,
      };
    })
    .catch((error: any) => {
      return {
        status: error.status,
        message: "error",
        data: error,
      };
    });
};
