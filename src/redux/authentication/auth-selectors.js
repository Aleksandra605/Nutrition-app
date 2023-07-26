const getToken = (state) => state.auth.token;

const isAuthenticated = (state) => state.auth.isAuthenticated;

export { getToken, isAuthenticated };
