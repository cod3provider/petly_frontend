import axios from 'axios';
import { BASE_URL } from './keys.js';

axios.defaults.baseURL = `${BASE_URL}`;

const getNews = async (searchKeyword = '') => {
  let response = null;

  try {
    const response = await axios.get(searchKeyword ? `/news/${searchKeyword}` : '/news');
    // console.log(response);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }

  return response;
};

export default getNews;