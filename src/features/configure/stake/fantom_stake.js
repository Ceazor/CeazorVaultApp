import { govPoolABI } from '../abi';

export const fantomStakePools = [
  {
    id: 'fBEETS',
    name: 'FBEETS',
    logo: 'stake/CRE8R/CRE8R.png',
    token: 'ceazFBEETS',
    tokenDecimals: 18,
    tokenAddress: '0x38ceed0dcf80b4794566b31302e8f8863f526012', // ceazFBEETS token
    tokenOracle: 'tokens',
    tokenOracleId: 'fBEETS',
    earnedToken: 'CRE8R',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x2aD402655243203fcfa7dCB62F8A08cc2BA88ae0', // CRE8R token
    earnContractAddress: '0x2aD402655243203fcfa7dCB62F8A08cc2BA88ae0', //NEED TO DEPLOY THE REWARD FARM AND ADD ADDRESS HERE>
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'CRE8R',
    partnership: false,
    status: 'active',
    fixedStatus: true,
    partners: [
      {
        logo: 'stake/CRE8R/CRE8Ryellow.png',
        background: '',
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
