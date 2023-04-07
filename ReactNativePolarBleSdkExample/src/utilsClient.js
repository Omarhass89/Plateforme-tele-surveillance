/* eslint-disable prettier/prettier */
import axios from "axios";

const client = axios.create({
    baseURL: 'http://10.12.147.106:8000/api'
})
export default client;