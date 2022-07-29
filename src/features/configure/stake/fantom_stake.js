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
    id: 'ceazCRE8R ceazFBeets XCheese',
    name: 'CRE8R in F-Major',
    logo: 'single-assets/ceazFBeets.png',
    token: 'ceazCRE8RBPT',
    tokenDecimals: 18,
    tokenAddress: '0xC93dd4F61C4598192f6c150Af38a58514eB3abbe', // ceaz staking token
    tokenOracle: 'tokens',
    tokenOracleId: 'BEETS',
    earnedToken: 'ceazFBeets',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x58E0ac1973F9d182058E6b63e7F4979bc333f493', // reward token
    earnContractAddress: '0x27987E15D6aF423340F9ed0797E388b2f46930Ca', // xCheese Contract
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
  {
    id: 'ceazliHND LQDR XCheese',
    name: 'Valhalla Calling By LiquidDriver',
    logo: 'single-assets/LQDR.png',
    token: 'ceazliHND',
    tokenDecimals: 18,
    tokenAddress: '0xd5Ab59A02E8610FCb9E7c7d863A9A2951dB33148', // ceaz staking token
    tokenOracle: 'tokens',
    tokenOracleId: 'LQDR',
    earnedToken: 'LQDR',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9', // reward token
    earnContractAddress: '0x93695F2A73439C4700dD1C4d6A58FFA0f570Da8e', // xCheese Contract
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'LQDR',
    partnership: false,
    status: 'active',
    fixedStatus: true,
    partners: [
      {
        logo: 'single-assets/LQDR.png',
        background: '',
        text: 'Become a yield hunter with LiquidDriver - Powering deep liquidity across the Fantom Ecosystem',
        website: 'https://www.liquiddriver.finance/',
        social: {
          DISCORD: 'https://discord.com/invite/6BvXc9Bbfu',
          twitter: 'https://twitter.com/LiquidDriver',
        },
      },
    ],
  },
  {
    id: 'ceazlinSpirit XCheese',
    name: 'Water Music By LiquidDriver',
    logo: 'single-assets/ceazFBeets.png',
    token: 'ceazlinSpiritBPT',
    tokenDecimals: 18,
    tokenAddress: '0x47198f4151f7aF48200999439B100d85a5697c00', // ceaz staking token
    tokenOracle: 'tokens',
    tokenOracleId: 'ceazFBeets',
    earnedToken: 'ceazFBeets',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x58E0ac1973F9d182058E6b63e7F4979bc333f493', // reward token
    earnContractAddress: '0x7A3dc192B4Fce1b0Db0f9bF7Ee4e034315441bC3', // xCheese Contract
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'ceazFBeets',
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
  {
    id: 'ceazMIM XCheese',
    name: 'Hundred MIM in Liquid Driver',
    logo: 'single-assets/ceazliHND.png',
    token: 'ceazMIM',
    tokenDecimals: 18,
    tokenAddress: '0xC9556DBB62535CD28DfB4f1feF75313a315A3c01', // ceaz staking token
    tokenOracle: 'tokens',
    tokenOracleId: 'ceazMIM',
    earnedToken: 'ceazliHND',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0xd5Ab59A02E8610FCb9E7c7d863A9A2951dB33148', // reward token
    earnContractAddress: '0x603CAf01D261d7A06A7f83c64212939bdFfCE8B1', // xCheese Contract
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'ceazliHND',
    partnership: false,
    status: 'active',
    fixedStatus: true,
    partners: [
      {
        logo: 'single-assets/HND.png',
        background: '',
        text: 'Hundred Finance is a decentralized application (dApp) that enables the lending and borrowing of cryptocurrencies',
        website: 'https://hundred.finance/',
        social: {
          DISCORD: 'https://discord.gg/phK668J6dQ',
          twitter: 'https://twitter.com/HundredFinance',
        },
      },
    ],
  },

  // EVERYTHING BELOW HERE IS CLOSED
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
    status: 'closed',
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
