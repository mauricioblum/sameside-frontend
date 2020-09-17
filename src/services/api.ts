import axios from 'axios';

// TODO: Env variables for production

const apiUrls = {
  staging: 'https://sameside-api.pvenda.com.br/',
  production: ''
};

const api = axios.create({
  baseURL: apiUrls.staging
});

export default api;
