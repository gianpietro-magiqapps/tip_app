import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://192.168.0.3:3000',
  baseURL: 'https://tip.magiqapps.com',
});

export default instance;
