import { govPoolABI } from '../abi';
/**
 * This fantomStakePools data structure assumes that pools with a status of 'closed' will NOT show on the FAQ.
 *  Therefore, they will not have the following fields:
 * - strategyAddress
 * - faq.description
 * - faq.showCheeseRate
 */
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
    strategyAddress: '0x38a206688332674be5ed20b5a65282224b43c189',
    faq: {
      description: `This vault accepts fBEETS tokens and stakes them on Beethoven-X to earn more fBEETS.
      It then harvests the rewards and takes out the 1% performance fee. It then compounds
      the rest into more fBEETS to increase APY. The voting power of the fBEETS is used to
      vote on the CRE8R:FTM Beethoven-X pool to direct rewards there. Any bribes are sent
      to the ExtraCheese.`,
      showCheeseRate: false,
    },
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
    strategyAddress: '0xD46F01C721c2F8B73d7D87ab48E26A2fEA52eA39',
    faq: {
      description: `This vault accepts CRE8R In F-Major Beethoven-X Liquidity Pool tokens and stakes
      them on Beethoven-X to earn BEETS and CRE8R tokens. It then harvests the rewards and
      takes out the 1% performance fee. It then uses all of the CRE8R and a percent of the
      BEETS to add to the liquidity pool. The ExtraCheese Rate shows what percent is kept and zapped into the
      autocompounding ceazFBEETS vault and sends the ceazFBEETS tokens to ExtraCheese. To
      get the ExtraCheese ceazFBEETS, stake your ceazCRE8RBPT vault token in Extra Cheese.`,
      showCheeseRate: true,
    },
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

  // EVERYTHING BELOW HERE IS CLOSED

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
    status: 'closed',
    fixedStatus: true,
    strategyAddress: '0xC7FEc1F4A0Ef5c3014e53b8b4926FE05B63dBE3F',
    faq: {
      description: `This vault accepts Valhalla Calling By LiquidDriver tokens and stakes them on
      LiquidDriver to earn LQDR tokens. It then harvests the rewards and takes out the 1%
      performance fee. It then sells some of LQDR add to the liquidity pool. The ExtraCheese Rate shows what percent is kept and
      sent to ExtraCheese. To get the Extra Cheese, stake your ceazliHND
      vault tokens in ExtraCheese.`,
      showCheeseRate: true,
    },
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
    status: 'closed',
    fixedStatus: true,
    strategyAddress: '0xd814bd9B1C6E9fB00654819DE646C318FDd09ED0',
    faq: {
      description: `This vault accepts Water Music By LiquidDriver tokens and stakes them on BeethovenX
      to earn BEETS tokens. It then harvests the rewards and takes out the 1% performance
      fee. It then sells a percent of BEETS to add to the liquidity pool. The ExtraCheese Rate shows what percent is kept and
      zapped to ceazFBeets and sends them to ExtraCheese. To get the Extra Cheese, stake your
      ceazlinSpiritBPT vault tokens in ExtraCheese.`,
      showCheeseRate: true,
    },
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
    status: 'closed',
    fixedStatus: true,
    strategyAddress: '0x70378B459df98400AfB7aaFd85CD147db17556d5', //
    faq: {
      description: `This vault accepts MIM tokens and supplies them to Hundred Finance to receive hMIM
      tokens. It then stakes these hMIM tokens into Liquid Driver to earn boosted HND
      rewards. It then harvests the rewards and takes out the 1% performance fee. It then
      sells a percent of HND to add to the MIM holdings. The ExtraCheese Rate shows what percent is kept and
      zapped into ceazliHND and sends them to ExtraCheese. To get the Extra Cheese, stake your ceazMIM vault tokens
      in ExtraCheese.`,
      showCheeseRate: true,
    },
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
  {
    id: 'ceazFRAX XCheese',
    name: 'Hundred FRAX in Liquid Driver',
    logo: 'single-assets/ceazliHND.png',
    token: 'ceazFRAX',
    tokenDecimals: 18,
    tokenAddress: '0xc033a514Ca3d249eE34f728f3482e3B8b54068C4', // ceaz staking token
    tokenOracle: 'tokens',
    tokenOracleId: 'ceazFRAX',
    earnedToken: 'ceazliHND',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0xd5Ab59A02E8610FCb9E7c7d863A9A2951dB33148', // reward token
    earnContractAddress: '0x6C9752fFc0c700d466391D8508167F6C1c292148', // xCheese Contract
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'ceazliHND',
    partnership: false,
    status: 'closed',
    fixedStatus: true,
    strategyAddress: '0xA312F686B8C6206D9840c42042B6EA66452A783a', //
    faq: {
      description: `This vault accepts FRAX tokens and supplies them to Hundred Finance to receive hFRAX
      tokens. It then stakes these hFRAX tokens into Liquid Driver to earn boosted HND
      rewards. It then harvests the rewards and takes out the 1% performance fee. It then
      sells a percent of HND to add to the MIM holdings. The ExtraCheese Rate shows what percent is kept and
      zapped into ceazliHND and sends them to ExtraCheese. To get the Extra Cheese, stake your ceazMIM vault tokens
      in ExtraCheese.`,
      showCheeseRate: true,
    },
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
  {
    id: 'ceazUSDC XCheese',
    name: 'Hundred USDC in Liquid Driver',
    logo: 'single-assets/ceazliHND.png',
    token: 'ceazUSDC',
    tokenDecimals: 18,
    tokenAddress: '0x51d910C1446F1bdA34AE9135161B551cc8fcfeA5', // ceaz staking token
    tokenOracle: 'tokens',
    tokenOracleId: 'ceazUSDC',
    earnedToken: 'ceazliHND',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0xd5Ab59A02E8610FCb9E7c7d863A9A2951dB33148', // reward token
    earnContractAddress: '0x2E92d09843EA73e1E823fE39Eb38570Bf40a1EE9', // xCheese Contract
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'ceazliHND',
    partnership: false,
    status: 'closed',
    fixedStatus: true,
    strategyAddress: '0x3d2918e22bdcc652266059110d3597b784ee8e39', //
    faq: {
      description: `This vault accepts USDC tokens and supplies them to Hundred Finance to receive hUSDC
      tokens. It then stakes these hUSDC tokens into Liquid Driver to earn boosted HND
      rewards. It then harvests the rewards and takes out the 1% performance fee. It then
      sells a percent of HND to add to the MIM holdings. The ExtraCheese Rate shows what percent is kept and
      zapped into ceazliHND and sends them to ExtraCheese. To get the Extra Cheese, stake your ceazMIM vault tokens
      in ExtraCheese.`,
      showCheeseRate: true,
    },
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
