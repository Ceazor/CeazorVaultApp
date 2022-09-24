/* eslint-disable import/first */
export const allNetworks = [
  {
    name: 'FANTOM',
    asset: 'FANTOM',
    id: 250,
    hash: '/fantom',
  },
  {
    name: 'POLYGON',
    asset: 'POLYGON',
    id: 137,
    hash: '/polygon',
  },
  {
    name: 'ARBITRUM',
    asset: 'ARBITRUM',
    id: 42161,
    hash: '/arbitrum',
  },
  {
    name: 'OPTIMISM',
    asset: 'OPTIMISM',
    id: 10,
    hash: '/optimism',
  },
];

const network = allNetworks.find(n => window.location.hash.startsWith('#' + n.hash));

if (!network) {
  window.location.hash = allNetworks[0].hash;
  window.location.reload();
} else {
  window.REACT_APP_NETWORK_ID = network.id;
}

export default network;
