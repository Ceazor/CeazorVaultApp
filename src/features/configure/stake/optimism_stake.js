import { govPoolABI } from '../abi';
//FIXME - add correct info after deployment of xCheese
// strategy address?
export const optimismStakePools = [
  {
    id: 'optimism-bifi-gov',
    name: 'BIFI Earnings Pool',
    logo: 'single-assets/BIFI.png',
    token: 'BIFI',
    tokenDecimals: 18,
    tokenAddress: '0x4E720DD3Ac5CFe1e1fbDE4935f386Bb1C66F4642',
    tokenOracle: 'tokens',
    tokenOracleId: 'BIFI',
    earnedToken: 'WETH',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x4200000000000000000000000000000000000006',
    earnContractAddress: '0x61645aE7BB524C2ea11cF90D673079EE2AbbB961',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'WETH',
    partnership: false,
    status: 'closed',
    fixedStatus: true,
    faq: {
      description: 'some description',
      showCheeseRate: true,
    },
    partners: [
      {
        logo: 'stake/beefy/beefyfinance.png',
        logoNight: 'stake/beefy/beefyfinance_night.png',
        background: 'stake/beefy/background.png',
        text: "Beefy Finance is The Multi-Chain Yield Optimizer across many sidechains, enabling users to earn autocompounded yield on their crypto. Did you know also that you can own a piece of Beefy itself? Beefy runs on its governance token, BIFI. The token has a set supply of 80,000 across all chains; no more may be minted, ever! As a holder of BIFI you may create and vote on important DAO proposals, and you become dividend-eligible to earn a share of every compounding harvest on Beefy vaults, hour by hour. Here on Arbitrum, you just need to stake BIFI in this reward pool, or in the autocompounding BIFI Maxi vault on the main page. For this pool, ETH dividends are gathered and sent proportionally to each staker. Stake here, return later to claim the ETH you've earned.",
        website: 'https://app.beefy.finance',
        social: {
          telegram: 'http://t.me/beefyfinance',
          twitter: 'https://twitter.com/beefyfinance',
        },
      },
    ],
  },
];
