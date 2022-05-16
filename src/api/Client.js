import axios from 'axios';

const client = axios.create({
    baseURL: 'http://localhost:8080'
    // baseURL: 'https://eurder-alen.herokuapp.com/'
})
export default client;
