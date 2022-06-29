export const apiUrl = process.env.REACT_APP_API_URL || 'https://api.beefy.finance/prices';

// Time-based cache buster
export const getApiCacheBuster = () => {
  return Math.trunc(Date.now() / (1000 * 60));
};
