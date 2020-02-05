import axios from 'axios';
import { AUTENTICATE } from '../constants/api';

var config = {
    headers: { 'Content-Type': 'application/json' },
};

const loginRequest = async data => axios.post(AUTENTICATE, data, config);


export {
  loginRequest,
};
