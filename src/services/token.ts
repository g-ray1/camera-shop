const AUTH_TOKEN_NAME = 'camera-shop-token';

export type TOKEN = string;

export const getToken = (): TOKEN => {
  const token = localStorage.getItem(AUTH_TOKEN_NAME);
  return token ?? '';
};

export const saveToken = (token: TOKEN) => {
  localStorage.setItem(AUTH_TOKEN_NAME, token);
};

export const dropToken = () => {
  localStorage.removeItem(AUTH_TOKEN_NAME);
};
