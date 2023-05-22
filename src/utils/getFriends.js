import axios from 'axios';

import { BASE_URL } from './keys.js';

const instance = axios.create({
  baseURL: `${BASE_URL}`,
});

export const getFriends = async () => {
  const { data } = await instance.get('/partners');
  // console.log(data);
  return data;
};

export default getFriends;