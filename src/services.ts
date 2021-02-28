export const services = [
  {
    id: 1,
    name: "User Service",
    logsPreviewUrl:
      process.env.REACT_APP_API_BASE +
      process.env.REACT_APP_USER_SERVICE +
      "/auth",
  },
  {
    id: 2,
    name: "Server Manager",
    logsPreviewUrl:
      process.env.REACT_APP_API_BASE +
      process.env.REACT_APP_SERVER_MANAGER +
      "/server",
  },
  {
    id: 3,
    name: "General API",
    logsPreviewUrl:
      process.env.REACT_APP_API_BASE +
      process.env.REACT_APP_GENERAL_API +
      "/organization",
  },
  {
    id: 4,
    name: "File Delivery API",
    logsPreviewUrl:
      process.env.REACT_APP_API_BASE +
      process.env.REACT_APP_FILE_DELIVERY_API +
      "/fdapi",
  },
]