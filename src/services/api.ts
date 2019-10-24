import Axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = Axios.create({
  baseURL: 'http://www.omdbapi.com/?apikey=6939ed28'
});

export default api;