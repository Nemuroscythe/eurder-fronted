import axios from 'axios';

const client = axios.create({
    baseURL: 'http://localhost:9000/'
    // baseURL: 'https://order-solution-jpa.herokuapp.com/'
})
export default client;
