import axios from 'axios';

const proxy = 'https://cors-anywhere-flixphilia.herokuapp.com/';

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: `${proxy}https://pure-lake-91665.herokuapp.com/api/`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    responseType: 'json',
  },
});

export default instance;
