import axios from 'axios';
import type { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  // TODO: Replace with your API URL
  baseURL: 'http://example.com/api',
});

// Request interceptor
axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  // TODO: Add auth token, log requests, etc.
  return config;
}, (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
});

// Response interceptor
axiosInstance.interceptors.response.use((response: AxiosResponse): AxiosResponse => {
  return response;
}, (error: AxiosError): Promise<AxiosError> => {
  // Handle global errors
  return Promise.reject(error);
});

export default axiosInstance;
