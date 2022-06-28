import { govPoolABI } from '../abi';

export const fantomStakePools = [
  {
    id: 'bifi-ftm',
    name: 'BIFI',
    logo: 'single-assets/BIFI.png',
    token: 'BIFI',
    tokenDecimals: 18,
    tokenAddress: '0xd6070ae98b8069de6B494332d1A1a81B6179D960',
    tokenOracle: 'tokens',
    tokenOracleId: 'BIFI',
    earnedToken: 'FTM',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
    earnContractAddress: '0x7fB900C14c9889A559C777D016a885995cE759Ee',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'FTM',
    partnership: false,
    status: 'active',
    fixedStatus: true,
    partners: [
      {
        logo: 'stake/beefy/beefyfinance.png',
        background: 'stake/beefy/background.png',
        text: "Beefy Finance is The Multi-Chain Yield Optimizer across many blockchains, enabling users to earn autocompounded yield on their crypto. Did you know also that you can own a piece of Beefy itself? Beefy runs on its governance token, BIFI. The token has a set supply of 80,000 across all chains; no more may be minted, ever! As a holder of BIFI you may create and vote on important DAO proposals, and you become dividend-eligible to earn a share of every compounding harvest on Beefy vaults, hour by hour. Here on Fantom, you just need to stake BIFI in this reward pool, or in the autocompounding BIFI Maxi vault on the main page. For this pool, FTM dividends are gathered and sent proportionally to each staker. Stake here, return later to claim the FTM you've earned.",
        website: 'https://app.beefy.finance',
        social: {
          telegram: 'http://t.me/beefyfinance',
          twitter: 'https://twitter.com/beefyfinance',
        },
      },
    ],
  },
];
