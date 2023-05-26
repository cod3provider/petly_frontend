import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://your-pet-backend-jfrs.onrender.com/news',
});

export const getNewsSerch = async (query, page, limit) => {
  const { data } = await instance.get(`/find`, {
    params: {
      query,
      page,
      limit,
    },
  });

  return data;
};

export const getNews = async (page, limit) => {
  const { data } = await instance.get(`/`, {
    params: {
      page,
      limit,
    },
  });
  return data;
};
