import axios from 'axios';

// TODO: Env variables for production

const apiUrls = {
  staging: 'https://sameside-api.pvenda.com.br/',
  production: ''
};

const api = axios.create({
  baseURL: apiUrls.staging
});

api.interceptors.response.use(
  response => response,
  error => {
    const { response } = error;
    if (response?.status === 401) {
      localStorage.removeItem('@SameSideSimulator:token');
      window.location.assign('/login');
    }
    return Promise.reject(error);
  }
);

export default api;
