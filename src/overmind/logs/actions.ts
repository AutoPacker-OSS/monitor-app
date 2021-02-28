import axios from 'axios';
import { Service } from '../../types/Service';

export const getLogsPreview = async (token: string, service: Service): Promise<any> => {
  return await axios
    .get(service.logsPreviewUrl + "/logs/preview", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      },
    })
    .then((response: any) => {
      return {
        status: response.status,
        message: "success",
        data: response.data
      }
    })
    .catch((error: any) => {
      return {
        status: error.status,
        message: "error",
        data: error
      }
    });
} 