const ROUTES = {
  REGISTER: '/register',
  LOGIN: '/login',
  NEWS: '/news',
  NOTICES: '/notices',
  FRIENDS: '/friends',
  USER: '/user',
  ADDPET: '/AddPet',
  HOMEPAGE: '/',
};

const BACKEND_ENDPOINTS = {
  REGISTER: 'users/register',
  LOGIN: 'users/login',
  CURRENT: 'users/current',
  UPDATE: 'users/update',
  AVATARS: 'users/avatars',
  LOGOUT: 'users/logout',
};

export const BASE_URL = 'https://your-pet-backend-jfrs.onrender.com';

export { ROUTES, BACKEND_ENDPOINTS };
