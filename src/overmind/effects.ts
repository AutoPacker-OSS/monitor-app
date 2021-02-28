import axios from 'axios';

export const api = {
};

export const tokenService = {
  get: () => {
    const token = localStorage.getItem("api_token") || null;
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return token;
  },
  set: (token: string) => {
    localStorage.setItem("api_token", token);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },
  clear: () => {
    localStorage.removeItem("api_token");
    axios.defaults.headers.common["Authorization"] = "";
  },
};