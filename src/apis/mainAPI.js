import axios from 'axios';

const mainAPI = axios.create({
  baseURL: 'http://192.168.0.164:3000', 
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default mainAPI;

