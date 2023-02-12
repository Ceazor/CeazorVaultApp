export const optimismPools = [
  {
    id: 'BPT-rETH-ETH',
    logo: 'OP-pairs/BPTrETH.png',
    name: 'Rocket Fuel Autocompounder',
    token: 'BPT-rETH-ETH',
    tokenDescription: 'Beethoven-x to earn OP and BAL then compounds to more BPTs.',
    tokenAddress: '0x4fd63966879300cafafbb35d157dc5229278ed23', //want token
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'ceazrETHBPT',
    earnedTokenAddress: '0x068D9D09DDC1Cf2b66A4C32eD74fFE68Db0b5f1B', // vault token
    earnContractAddress: '0x068D9D09DDC1Cf2b66A4C32eD74fFE68Db0b5f1B', // vault token
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'BPT-rETH',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Beethoven-X',
    assets: ['BPT-rETH-ETH'],
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
      'https://op.beets.fi/pool/0x4fd63966879300cafafbb35d157dc5229278ed2300020000000000000000002b',
    createdAt: 1622574935,
  },
];
