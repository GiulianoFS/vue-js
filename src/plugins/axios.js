import axios from 'axios';

const Axios = axios.create({
  baseURL: 'http://192.168.1.9:8000/api'
  // Add more configurations as needed
});

export default Axios;