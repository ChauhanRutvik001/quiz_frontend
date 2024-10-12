import axios from 'axios';

// Create an axios instance

console.log("base url " + process.env.REACT_APP_API_URL)

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/v1/user`, // Set the base URL",
  withCredentials: true,  // To send cookies if needed (depending on your setup)
  headers: {
    'Content-Type': 'application/json'
  }
});


export default axiosInstance;
