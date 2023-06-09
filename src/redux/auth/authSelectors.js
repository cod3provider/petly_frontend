export const getToken = state => state.auth.token;

export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getName = state => state.auth.user.name;

export const getLoading = state => state.auth.isLoading;

export const refreshThunk = state => state.auth.isRefreshing;

export const getAvatar = state => state.auth.avatarUrl;

export const getUserFavorite = state => state.auth.favorite;

export const getUser = state => state.auth.user;

export const getIsNewUser = state => state.auth.isNewUser;
