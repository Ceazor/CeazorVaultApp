export const fantomPools = [
  {
    id: 'fantom-fBEETS',
    logo: 'single-assets/fBEETS.png',
    name: 'FBEETS Compounder',
    token: 'FBEETS',
    tokenDescription:
      'Beethoven-x to earn additional Beets. The fBEETS voting power is used to vote on the CRE8R:FTM Beethoven-X gauge.',
    tokenAddress: '0xfcef8a994209d6916eb2c86cdd2afd60aa6f54b1', //want token
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'ceazFBEETS',
    earnedTokenAddress: '0x58e0ac1973f9d182058e6b63e7f4979bc333f493', // vault token
    earnContractAddress: '0x58e0ac1973f9d182058e6b63e7f4979bc333f493', // vault token
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'fBEETS',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Beethoven-X',
    assets: ['FBEETS'],
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
    buyTokenUrl: 'https://beets.fi/#/stake',
    createdAt: 1622574935,
  },
  {
    id: 'fantom-CRE8RBPT',
    logo: 'fantom/Cre8rBPT.png',
    name: 'CRE8R in F-Major',
    token: 'CRE8RBPT',
    tokenDescription:
      'Beethoven to earn Beets and CRE8R. CRE8R are compounded into the CRE8RBPT, and the BEETS are converted to ceazFBeets for xCheese',
    tokenAddress: '0xbb4607beDE4610e80d35C15692eFcB7807A2d0A6', //want
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'ceazCRE8RBPT',
    earnedTokenAddress: '0xC93dd4F61C4598192f6c150Af38a58514eB3abbe', //vault
    earnContractAddress: '0xC93dd4F61C4598192f6c150Af38a58514eB3abbe', //vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'CRE8R',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Beethoven-X',
    assets: ['CRE8R'],
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
      'https://beets.fi/#/pool/0xbb4607bede4610e80d35c15692efcb7807a2d0a6000200000000000000000140',
    createdAt: 1622574935,
  },
  {
    id: 'fantom-CRE8RbbUSDBPT',
    logo: 'fantom/Cre8rBPT.png',
    name: 'CRE8R in bbMinor',
    token: 'CRE8RbbUSDBPT',
    tokenDescription:
      'Beethoven to earn Beets and CRE8R. CRE8R are compounded into the CRE8RbbUSDBPT, and the BEETS are converted to ceazFBeets for xCheese',
    tokenAddress: '0x8c63702D4D4A521A6a8ECEc8AB8F7CE9d1D6299e', //want
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'ceazCRE8RbbUSD',
    earnedTokenAddress: '0xdb2DE1a460e46117D2544C46E3819D56e4D98F91', //vault
    earnContractAddress: '0xdb2DE1a460e46117D2544C46E3819D56e4D98F91', //vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'CRE8R',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Beethoven-X',
    assets: ['CRE8R'],
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
      'https://beets.fi/#/pool/0xbb4607bede4610e80d35c15692efcb7807a2d0a6000200000000000000000140',
    createdAt: 1622574935,
  },
  // {
  //   id: 'fantom-hMIM',
  //   logo: 'single-assets/MIM.png',
  //   name: 'Hundred MIM in Liquid Driver',
  //   token: 'hMIM',
  //   tokenDescription:
  //     'hMIM from Hundred to earn boosted HND on Liquid Drive, which are sold and used to compound more hMIM.',
  //   tokenAddress: '0xa8cD5D59827514BCF343EC19F531ce1788Ea48f8', //want
  //   tokenDecimals: 8,
  //   tokenDescriptionUrl: '#',
  //   earnedToken: 'ceazhMIM',
  //   earnedTokenAddress: '0xc28F6A40Be1D0209cC3feC2e9B61A4470762c34E', //vault
  //   earnContractAddress: '0xc28F6A40Be1D0209cC3feC2e9B61A4470762c34E', //vault
  //   pricePerFullShare: 1,
  //   tvl: 0,
  //   oracle: 'tokens',
  //   oracleId: '??',
  //   oraclePrice: 0,
  //   depositsPaused: false,
  //   status: 'active',
  //   platform: 'Hundred/LiquidDriver',
  //   assets: ['hMIM'],
  //   risks: [
  //     'COMPLEXITY_LOW',
  //     'BATTLE_TESTED',
  //     'IL_NONE',
  //     'MCAP_MEDIUM',
  //     'AUDIT',
  //     'CONTRACTS_VERIFIED',
  //   ],
  //   stratType: 'Compounder',
  //   withdrawalFee: '0.00%',
  //   buyTokenUrl:
  //     'https://beets.fi/#/pool/https://beets.fi/#/pool/https://beets.fi/#/pool/0xd163415bd34ef06f57c58d2aed5a5478afb464cc00000000000000000000000e',
  //   createdAt: 43760821,
  // },
  // {
  //   id: 'fantom-linSpiritBPT',
  //   logo: 'fantom/linSpiritBPT.png',
  //   name: 'Water Music By LiquidDriver',
  //   token: 'linSpiritBPT',
  //   tokenDescription: 'BeethovenX to earn Beets converts some to ceazFBeets for xCheese',
  //   tokenAddress: '0x30A92a4EEca857445F41E4Bb836e64D66920F1C0', //want
  //   tokenDecimals: 18,
  //   tokenDescriptionUrl: '#',
  //   earnedToken: 'ceazlinSpiritBPT',
  //   earnedTokenAddress: '0x47198f4151f7aF48200999439B100d85a5697c00', //vault
  //   earnContractAddress: '0x47198f4151f7aF48200999439B100d85a5697c00', //vault
  //   pricePerFullShare: 1,
  //   tvl: 0,
  //   oracle: 'tokens',
  //   oracleId: '??',
  //   oraclePrice: 0,
  //   depositsPaused: false,
  //   status: 'active',
  //   platform: 'Beethoven-X',
  //   assets: ['SPIRIT'],
  //   risks: [
  //     'COMPLEXITY_LOW',
  //     'BATTLE_TESTED',
  //     'IL_NONE',
  //     'MCAP_MEDIUM',
  //     'AUDIT',
  //     'CONTRACTS_VERIFIED',
  //   ],
  //   stratType: 'Compounder',
  //   withdrawalFee: '0.01%',
  //   buyTokenUrl:
  //     'https://beets.fi/#/pool/https://beets.fi/#/pool/0x30a92a4eeca857445f41e4bb836e64d66920f1c0000200000000000000000071',
  //   createdAt: 43561861,
  // },
  // {
  //   id: 'fantom-liHNDBPT',
  //   logo: 'fantom/liHNDBPT.png',
  //   name: 'Valhalla Calling By LiquidDriver',
  //   token: 'liHNDBPT',
  //   tokenDescription: 'Liquid Driver to earn LQDR sends some to xCheese',
  //   tokenAddress: '0x8F6a658056378558fF88265f7c9444A0FB4DB4be', //want
  //   tokenDecimals: 18,
  //   tokenDescriptionUrl: '#',
  //   earnedToken: 'ceazliHND',
  //   earnedTokenAddress: '0xd5Ab59A02E8610FCb9E7c7d863A9A2951dB33148', //vault
  //   earnContractAddress: '0xd5Ab59A02E8610FCb9E7c7d863A9A2951dB33148', //vault
  //   pricePerFullShare: 1,
  //   tvl: 0,
  //   oracle: 'tokens',
  //   oracleId: '??',
  //   oraclePrice: 0,
  //   depositsPaused: false,
  //   status: 'active',
  //   platform: 'Beethoven-X',
  //   assets: ['HND'],
  //   risks: [
  //     'COMPLEXITY_LOW',
  //     'BATTLE_TESTED',
  //     'IL_NONE',
  //     'MCAP_MEDIUM',
  //     'AUDIT',
  //     'CONTRACTS_VERIFIED',
  //   ],
  //   stratType: 'Compounder',
  //   withdrawalFee: '0.01%',
  //   buyTokenUrl:
  //     'https://beets.fi/#/pool/0x8f6a658056378558ff88265f7c9444a0fb4db4be0002000000000000000002b8',
  //   createdAt: 1622574935,
  // },

  //   {
  //     id: 'fantom-FRAX-hFRAX',
  //     logo: 'single-assets/FRAX.png',
  //     name: 'Hundred FRAX in Liquid Driver',
  //     token: 'FRAX',
  //     tokenDescription: 'FRAX to add to Hundred, then deposits in Liquid driver to earn boosted HND',
  //     tokenAddress: '0xdc301622e621166BD8E82f2cA0A26c13Ad0BE355', //want
  //     tokenDecimals: 18,
  //     tokenDescriptionUrl: '#',
  //     earnedToken: 'ceazFRAX',
  //     earnedTokenAddress: '0xc033a514Ca3d249eE34f728f3482e3B8b54068C4', //vault
  //     earnContractAddress: '0xc033a514Ca3d249eE34f728f3482e3B8b54068C4', //vault
  //     pricePerFullShare: 1,
  //     tvl: 0,
  //     oracle: 'tokens',
  //     oracleId: '??',
  //     oraclePrice: 0,
  //     depositsPaused: false,
  //     status: 'active',
  //     platform: 'Hundred/LiquidDriver',
  //     assets: ['FRAX'],
  //     risks: [
  //       'COMPLEXITY_LOW',
  //       'BATTLE_TESTED',
  //       'IL_NONE',
  //       'MCAP_MEDIUM',
  //       'AUDIT',
  //       'CONTRACTS_VERIFIED',
  //     ],
  //     stratType: 'Compounder',
  //     withdrawalFee: '0.01%',
  //     buyTokenUrl:
  //       'https://beets.fi/#/pool/https://beets.fi/#/https://swap.spiritswap.finance/#/exchange/swap/FTM/FRAX/https://beets.fi/#/pool/0xd163415bd34ef06f57c58d2aed5a5478afb464cc00000000000000000000000e',
  //     createdAt: 43760821,
  //   },
  //   {
  //     id: 'fantom-USDC-hUSDC',
  //     logo: 'single-assets/USDC.svg',
  //     name: 'Hundred USDC in Liquid Driver',
  //     token: 'USDC',
  //     tokenDescription: 'USDC to add to Hundred, then deposits in Liquid driver to earn boosted HND',
  //     tokenAddress: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75', //want
  //     tokenDecimals: 6,
  //     tokenDescriptionUrl: '#',
  //     earnedToken: 'ceazUSDC',
  //     earnedTokenAddress: '0x51d910C1446F1bdA34AE9135161B551cc8fcfeA5', //vault
  //     earnContractAddress: '0x51d910C1446F1bdA34AE9135161B551cc8fcfeA5', //vault
  //     pricePerFullShare: 1,
  //     tvl: 0,
  //     oracle: 'tokens',
  //     oracleId: '??',
  //     oraclePrice: 0,
  //     depositsPaused: false,
  //     status: 'active',
  //     platform: 'Hundred/LiquidDriver',
  //     assets: ['USDC'],
  //     risks: [
  //       'COMPLEXITY_LOW',
  //       'BATTLE_TESTED',
  //       'IL_NONE',
  //       'MCAP_MEDIUM',
  //       'AUDIT',
  //       'CONTRACTS_VERIFIED',
  //     ],
  //     stratType: 'Compounder',
  //     withdrawalFee: '0.01%',
  //     buyTokenUrl: 'https://ftm.curve.fi/',
  //     createdAt: 43760821,
  //   },
];
