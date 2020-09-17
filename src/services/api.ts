import axios from 'axios';

// TODO: Env variables for production

const apiUrls = {
  staging: 'http://sameside-env.us-west-2.elasticbeanstalk.com/',
  production: ''
};

const api = axios.create({
  baseURL: apiUrls.staging
});

export default api;
