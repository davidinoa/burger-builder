import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-d52d9.firebaseio.com/'
});

export default instance;