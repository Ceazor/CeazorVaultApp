export const optimismPools = [
  {
    id: 'IBBPT',
    logo: 'single-assets/ibBPT.png',
    name: 'Puff the Magic Dragon Compounder',
    token: 'IBBPT',
    tokenDescription: 'Beethoven-x to earn additional IB. Compound the IB into the BPT.',
    tokenAddress: '0xeFb0D9F51EFd52d7589A9083A6d0CA4de416c249', //want token
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'ceazFBEETS',
    earnedTokenAddress: '0x0eb5103afA769E838743E8F0CaF98cCd6065bD08', // vault token
    earnContractAddress: '0x0eb5103afA769E838743E8F0CaF98cCd6065bD08', // vault token
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'IBBPT',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Beethoven-X',
    assets: ['IBBPT'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'Compounder',
    withdrawalFee: '0.01%',
    buyTokenUrl:
      'https://op.beets.fi/pool/0xefb0d9f51efd52d7589a9083a6d0ca4de416c24900020000000000000000002c',
    createdAt: 1622574935,
  },
];
