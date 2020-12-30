import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-clone-660ee.cloudfunctions.net/api' // Firebase endpoint
  // baseURL: 'http://localhost:5001/clone-660ee/us-central1/api' // Local endpoint
})

export default instance;
