import { govPoolABI } from '../abi';
//FIXME - add correct info after deployment of xCheese
// strategy address?
export const optimismStakePools = [
  {
    id: 'ceazIBBPT XCheese',
    name: 'ceazIBBPT',
    logo: 'xCheese/ceazrETHBPT.png',
    token: 'ceazIBBPT',
    tokenDecimals: 18,
    tokenAddress: '0xd94210Cbf1D62Ff6E1C4B28552FEbcBF6aF378CB', // stake token
    tokenOracle: 'tokens',
    tokenOracleId: '',
    earnedToken: 'ceazrETHBPT',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x068D9D09DDC1Cf2b66A4C32eD74fFE68Db0b5f1B', // reward token
    earnContractAddress: '0x8bE5ED8aA02061Be44B08b7ff7b34E4e8Cb7A6c8', // xCheese Contract
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: '',
    partnership: false,
    status: 'active', //closed or active
    fixedStatus: true,
    strategyAddress: '0x6c0833eDE9937c977aDeA380848C115211c85C4b',
    faq: {
      description: `This vault accepts Galactic Dragon Beethoven-X Liquidity Pool tokens and stakes
      them on Beethoven-X to earn BAL, OP, and sometimes IB tokens. It then harvests the rewards and
      takes out the performance fee. It then uses a percent of the BAL and OP to create Extra Cheese. 
      The ExtraCheese Rate shows what percent is converted to ceazrETHBPT and sent to ExtraCheese stakers. To
      get the ExtraCheese, stake your ceazIBBPT vault token in Extra Cheese. The remaining BAL and OP and any 
      IB tokens are compounded into more Galactic Dragon LP tokens and added to the vault`,
      showCheeseRate: false,
    },
    partners: [
      {
        logo: 'single-assets/IB.png',
        background: '',
        text: `Iron Bank is a decentralized lending platform focused on capital efficiency allowing protocols and individuals to 
        supply and borrow cryptocurrencies on Ethereum, Optimism, Avalanche and Fantom. It is helping build a better and safer DeFi lending ecosystem, 
        by driving capital efficiency with trusted entities as the liquidity infrastructure and backbone for DeFi and CeFi',
        website: 'https://app.ib.xyz/`,
        social: {
          DISCORD: 'https://discord.com/invite/4HwFTcjY78',
          twitter: 'https://twitter.com/ibdotxyz',
        },
      },
    ],
  },
];
