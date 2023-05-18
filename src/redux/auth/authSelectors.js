export const getToken = state => state.auth.token;

export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getName = state => state.auth.user.name;
// export const refreshThunk = state => state.auth.isRefreshing;
export const refreshThunk = state => state.auth.isRefreshing;

export const getUserFavorite = state => state.auth.favorite;

export const getUser = state => state.auth.user;
