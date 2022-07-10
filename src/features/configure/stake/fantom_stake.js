import { govPoolABI } from '../abi';

export const fantomStakePools = [
  {
    id: 'ceazfBEETS XCheese',
    name: 'FBEETS Compounder',
    logo: 'stake/CRE8R/CRE8R.png',
    token: 'ceazFBEETS',
    tokenDecimals: 18,
    tokenAddress: '0x58e0ac1973f9d182058e6b63e7f4979bc333f493', // ceazFBEETS token
    tokenOracle: 'tokens',
    tokenOracleId: 'fBEETS',
    earnedToken: 'CRE8R',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x2aD402655243203fcfa7dCB62F8A08cc2BA88ae0', // reward token
    earnContractAddress: '0xd526b031Eb14323c93D615fb3fc03a2689e92356', // xCheese Contract
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
  {
    id: 'ceazCRE8R XCheese',
    name: 'CRE8R in F-Major Compounder',
    logo: 'single-assets/BEETS.png',
    token: 'ceazCRE8RBPT',
    tokenDecimals: 18,
    tokenAddress: '0xC93dd4F61C4598192f6c150Af38a58514eB3abbe', // ceazFBEETS token
    tokenOracle: 'tokens',
    tokenOracleId: 'BEETS',
    earnedToken: 'BEETS',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0xF24Bcf4d1e507740041C9cFd2DddB29585aDCe1e', // reward token
    earnContractAddress: '0x6d9cCA043f7De62646e810FA19a4386c1588C02c', // xCheese Contract
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'BEETS',
    partnership: false,
    status: 'active',
    fixedStatus: true,
    partners: [
      {
        logo: 'stake/Beethoven-x/Beets-hero.png',
        background: '',
        text: 'Built on Balancer V2, Beethoven X is the first next-generation AMM protocol on Fantom Opera.',
        website: 'https://beets.fi/#/',
        social: {
          DISCORD: 'https://discord.gg/jedS4zGk28',
          twitter: 'https://twitter.com/beethoven_x',
        },
      },
    ],
  },
];
