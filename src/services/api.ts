import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { getToken } from './token';

const BACK_URL = 'https://camera-shop.accelerator.pages.academy/';

const REQUEST_TIMEOUT = 5000;

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACK_URL,
    timeout: REQUEST_TIMEOUT
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();
      if (token && config.headers) {
        config.headers['x-token'] = token;
      }
      return config;
    }
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{ error: string }>) => {
      throw error;
    });

  return api;
};
