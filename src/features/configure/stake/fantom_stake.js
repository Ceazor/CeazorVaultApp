import { govPoolABI } from '../abi';

export const fantomStakePools = [
  {
    id: 'fBEETS',
    name: 'FBEETS',
    logo: 'stake/CRE8R/CRE8R.png',
    token: 'ceazfBEETS',
    tokenDecimals: 18,
    tokenAddress: '0x957D9784709CA8eeeCCC7Cb11a47dBc721b948bf',
    tokenOracle: 'tokens',
    tokenOracleId: 'fBEETS',
    earnedToken: 'CRE8R',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x2aD402655243203fcfa7dCB62F8A08cc2BA88ae0',
    earnContractAddress: '0x2aD402655243203fcfa7dCB62F8A08cc2BA88ae0',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'CRE8R',
    partnership: false,
    status: 'active',
    fixedStatus: true,
    partners: [
      {
        logo: 'stake/CRE8R/CRE8Ryellow.png',
        background: 'stake/beefy/background.png',
        text: 'The worlds first & only decentralized Web3 content marketing agency DAO. Massively scalable. Fueled by DeFi.',
        website: 'https://cre8r.vip/',
        social: {
          DISCORD: 'https://t.co/TEriBN1T64',
          twitter: 'https://twitter.com/CRE8RDAO',
        },
      },
    ],
  },
];
