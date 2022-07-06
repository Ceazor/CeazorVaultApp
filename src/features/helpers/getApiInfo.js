export const apiUrl = process.env.REACT_APP_API_URL || 'https://api.beefy.finance';

export const yApiUrl = 'https://api.yearn.finance/v1/chains/250/vaults/all';

// Time-based cache buster
export const getApiCacheBuster = () => {
  return Math.trunc(Date.now() / (1000 * 60));
};
