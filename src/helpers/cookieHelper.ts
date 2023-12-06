import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import config from '../config/index';

const getToken = (): string | undefined => {
  return Cookies.get(config.auth.xTokenKey);
};

const getRefreshToken = (): string | undefined => {
  return Cookies.get(config.auth.rTokenKey);
};

const isLoggedIn = (): boolean => {
  const cookie = Cookies.get(config.auth.xTokenKey);

  return cookie !== '' && cookie !== undefined ? true : false;
};

const decodeToken = (): string => {
  const token = Cookies.get(config.auth.xTokenKey) as string;

  return jwtDecode(token);
};

export default {
  getToken,
  getRefreshToken,
  isLoggedIn,
  decodeToken,
};
