import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8000/v1'
    : 'https://api-analytics.iran.liara.run/v1';

// create an axios instance
const instance = axios.create({
  baseURL,
  // withCredentials: true,
  timeout: 30000, // request timeout,
  // Flag to handle the error directly in the respose
  __handleErrorsInResponse: true,
  // validateStatus: status => status < 204, // Reject only if the status code is greater than or equal to 500
  // Default Headers & empty data. Empty data is used because if it isn't present, this headers are not sent
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default instance;
