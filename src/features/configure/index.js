import { addressBook } from 'blockchain-addressbook';

const {
  polygon: polygonAddressBook,
  fantom: fantomAddressBook,
  arbitrum: arbitrumAddressBook,
  optimism: optimismAddressBook,
} = addressBook;
export { polygonAddressBook, fantomAddressBook, arbitrumAddressBook, optimismAddressBook };

export {
  vaultABI,
  bnbVaultABI,
  erc20ABI,
  strategyABI,
  multicallABI,
  govPoolABI,
  beefyUniV2ZapABI,
  uniswapV2PairABI,
  uniswapV2RouterABI,
  launchPoolABI,
} from './abi';
export { polygonStakePools } from './stake/polygon_stake';
export { fantomStakePools } from './stake/fantom_stake';
export { arbitrumStakePools } from './stake/arbitrum_stake';
export { polygonPools } from './vault/polygon_pools';
export { fantomPools } from './vault/fantom_pools';
export { optimismPools } from './vault/optimism_pools';
export { arbitrumPools } from './vault/arbitrum_pools';
export { polygonZaps } from './zap/polygon_zaps';
export { fantomZaps } from './zap/fantom_zaps';
export { arbitrumZaps } from './zap/arbitrum_zaps';
export { nativeCoins } from './native_coins';
