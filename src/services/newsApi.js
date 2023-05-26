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

  console.log('data: ', data);
  return data;
};

export const getNews = async (page, limit) => {
  console.log('page: ', page);
  console.log('limit: ', limit);

  const { data } = await instance.get(`/`, {
    params: {
      page,
      limit,
    },
  });
  return data;
};
