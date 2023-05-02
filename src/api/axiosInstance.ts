import axios from 'axios';
import axiosConfig from './axiosConfig';

const BaseApi = () => {
  const apiCore = axios.create(axiosConfig);
  const basePath = axiosConfig.baseURL;

  return { apiCore, basePath };
};

const baseApi = BaseApi();

export default baseApi;
