/* api.js */
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/';
const api = {
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },

  get: (url, params) => new Promise((resolve, reject) => {
    axios.get(url, {
      params,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  }),

  post: (url, params) => new Promise((resolve, reject) => {
    axios.post(url, params)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(errors);
      });
  }),

  put: (url, params) => new Promise((resolve, reject) => {
    axios.put(url, params)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  }),

  delete: (url) => new Promise((resolve, reject) => {
    axios.delete(url)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  }),
};

export default api;
