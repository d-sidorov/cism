import axios from 'axios'

//create an axios instance in order to use it globally with same config
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_URL_API,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default axiosInstance
