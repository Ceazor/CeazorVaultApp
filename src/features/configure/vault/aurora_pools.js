export const auroraPools = [
  {
    id: 'aurora-bifi-maxi',
    logo: 'single-assets/BIFI.png',
    name: 'BIFI Maxi',
    token: 'BIFI',
    tokenDescription: 'Beefy.Finance',
    tokenAddress: '0x218c3c3D49d0E7B37aff0D8bB079de36Ae61A4c0',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooAuroraBIFI',
    earnedTokenAddress: '0xD25c56DAbcda719F1c67fE8fc0760f8B942aC95C',
    earnContractAddress: '0xD25c56DAbcda719F1c67fE8fc0760f8B942aC95C',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'BIFI',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Beefy.Finance',
    assets: ['BIFI'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'Maxi',
    withdrawalFee: '0.05%',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?outputCurrency=0x218c3c3D49d0E7B37aff0D8bB079de36Ae61A4c0',
    createdAt: 1644698869,
  },
  {
    id: 'rose-mai-3pool',
    logo: 'single-assets/MAI_Rose.png',
    name: 'MAI/USDT/USDC/DAI',
    token: 'MAI/USDT/USDC/DAI',
    tokenDescription: 'Rose',
    tokenAddress: '0xA7ae42224Bf48eCeFc5f838C230EE339E5fd8e62',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooRoseMAI-3POOL',
    earnedTokenAddress: '0xE82cEB3e5C07d38006d82Cbf3072181E5868b670',
    earnContractAddress: '0xE82cEB3e5C07d38006d82Cbf3072181E5868b670',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'rose-mai-3pool',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Rose',
    assets: ['MAI', 'USDT', 'USDC', 'DAI'],
    risks: ['COMPLEXITY_LOW', 'BATTLE_TESTED', 'IL_NONE', 'MCAP_HIGH', 'CONTRACTS_VERIFIED'],
    stratType: 'StratLP',
    addLiquidityUrl: 'https://app.rose.fi/#/farms/mai',
    createdAt: 1650375700,
  },
  {
    id: 'rose-ust-3pool',
    logo: 'single-assets/UST_Rose.png',
    name: 'UST/USDT/USDC/DAI',
    token: 'UST/USDT/USDC/DAI',
    tokenDescription: 'Rose',
    tokenAddress: '0x94A7644E4D9CA0e685226254f88eAdc957D3c263',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooRoseUST-3POOL',
    earnedTokenAddress: '0x92E586d7dB14483C103c2e0FE6A596F8b55DA752',
    earnContractAddress: '0x92E586d7dB14483C103c2e0FE6A596F8b55DA752',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'rose-ust-3pool',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Rose',
    assets: ['atUST', 'USDT', 'USDC', 'DAI'],
    risks: ['COMPLEXITY_LOW', 'BATTLE_TESTED', 'IL_NONE', 'MCAP_HIGH', 'CONTRACTS_VERIFIED'],
    stratType: 'StratLP',
    addLiquidityUrl: 'https://app.rose.fi/#/farms/ust',
    createdAt: 1649955343,
  },
  {
    id: 'tri-ausdo-usdt',
    name: 'aUSDO-USDT LP',
    token: 'aUSDO-USDT LP',
    tokenDescription: 'Trisolaris',
    tokenAddress: '0x6277f94a69Df5df0Bc58b25917B9ECEFBf1b846A',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooTriaUSDO-USDT',
    earnedTokenAddress: '0x476214C90f5b85E647eE706e75C3BDC3546AEEEd',
    earnContractAddress: '0x476214C90f5b85E647eE706e75C3BDC3546AEEEd',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'tri-ausdo-usdt',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Trisolaris',
    assets: ['aUSDO', 'USDT'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_MICRO',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?outputCurrency=0x293074789b247cab05357b08052468B5d7A23c5a',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0x4988a896b1227218e4A686fdE5EabdcAbd91571f/0x293074789b247cab05357b08052468B5d7A23c5a',
    createdAt: 1647626968,
  },
  {
    id: 'tri-mecha-near-eol',
    name: 'MECHA-NEAR LP',
    token: 'MECHA-NEAR LP',
    tokenDescription: 'Trisolaris',
    tokenAddress: '0xd62f9ec4C4d323A0C111d5e78b77eA33A2AA862f',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooTriMECHA-NEAR',
    earnedTokenAddress: '0xa08911355C916097ed99Bb5199ef721b74dA8135',
    earnContractAddress: '0xa08911355C916097ed99Bb5199ef721b74dA8135',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'tri-mecha-near',
    oraclePrice: 0,
    depositsPaused: true,
    status: 'eol',
    retireReason: 'rewards',
    platform: 'Trisolaris',
    assets: ['MECHA', 'NEAR'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_HIGH',
      'MCAP_MICRO',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?outputCurrency=0xa33C3B53694419824722C10D99ad7cB16Ea62754',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d/0xa33C3B53694419824722C10D99ad7cB16Ea62754',
    createdAt: 1644674242,
  },
  {
    id: 'tri-near-flx',
    name: 'FLX-NEAR LP',
    token: 'FLX-NEAR LP',
    tokenDescription: 'Trisolaris',
    tokenAddress: '0x48887cEEA1b8AD328d5254BeF774Be91B90FaA09',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooTriFLX-NEAR',
    earnedTokenAddress: '0x356b3a363f80eded902f718C494d7Cd118a777bb',
    earnContractAddress: '0x356b3a363f80eded902f718C494d7Cd118a777bb',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'tri-near-flx',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Trisolaris',
    assets: ['FLX', 'NEAR'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_HIGH',
      'MCAP_MICRO',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?outputCurrency=0xea62791aa682d455614eaA2A12Ba3d9A2fD197af',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d/0xea62791aa682d455614eaA2A12Ba3d9A2fD197af',
    createdAt: 1644674036,
  },
  {
    id: 'tri-avax-near-eol',
    name: 'AVAX-NEAR LP',
    token: 'AVAX-NEAR LP',
    tokenDescription: 'Trisolaris',
    tokenAddress: '0x6443532841a5279cb04420E61Cf855cBEb70dc8C',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooTriAVAX-NEAR',
    earnedTokenAddress: '0x76913cBC80df343Bae78f66CDdC8D275020a12fB',
    earnContractAddress: '0x76913cBC80df343Bae78f66CDdC8D275020a12fB',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'tri-avax-near',
    oraclePrice: 0,
    depositsPaused: true,
    status: 'eol',
    retireReason: 'rewards',
    platform: 'Trisolaris',
    assets: ['AVAX', 'NEAR'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_HIGH',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?outputCurrency=0x80A16016cC4A2E6a2CACA8a4a498b1699fF0f844',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d/0x80A16016cC4A2E6a2CACA8a4a498b1699fF0f844',
    createdAt: 1644673733,
  },
  {
    id: 'tri-matic-near-eol',
    name: 'MATIC-NEAR LP',
    token: 'MATIC-NEAR LP',
    tokenDescription: 'Trisolaris',
    tokenAddress: '0x3dC236Ea01459F57EFc737A12BA3Bb5F3BFfD071',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooTriMATIC-NEAR',
    earnedTokenAddress: '0x50E33d0CB8664F9C2867c679d3C955A6b2A0faD4',
    earnContractAddress: '0x50E33d0CB8664F9C2867c679d3C955A6b2A0faD4',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'tri-matic-near',
    oraclePrice: 0,
    depositsPaused: true,
    status: 'eol',
    retireReason: 'Rewards',
    platform: 'Trisolaris',
    assets: ['MATIC', 'NEAR'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_HIGH',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?outputCurrency=0x6aB6d61428fde76768D7b45D8BFeec19c6eF91A8',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d/0x6aB6d61428fde76768D7b45D8BFeec19c6eF91A8',
    createdAt: 1644673492,
  },
  {
    id: 'tri-bnb-near-eol',
    name: 'BNB-NEAR LP',
    token: 'BNB-NEAR LP',
    tokenDescription: 'Trisolaris',
    tokenAddress: '0x7be4a49AA41B34db70e539d4Ae43c7fBDf839DfA',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooTriBNB-NEAR',
    earnedTokenAddress: '0x2D78a2Bbfa71c268beE36011F944901aF9b9d351',
    earnContractAddress: '0x2D78a2Bbfa71c268beE36011F944901aF9b9d351',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'tri-bnb-near',
    oraclePrice: 0,
    depositsPaused: true,
    status: 'eol',
    retireReason: 'Rewards',
    platform: 'Trisolaris',
    assets: ['BNB', 'NEAR'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_HIGH',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?outputCurrency=0x2bF9b864cdc97b08B6D79ad4663e71B8aB65c45c',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d/0x2bF9b864cdc97b08B6D79ad4663e71B8aB65c45c',
    createdAt: 1644673228,
  },
  {
    id: 'solace-solace',
    logo: 'single-assets/SOLACE.png',
    name: 'SOLACE',
    token: 'SOLACE',
    tokenDescription: 'Solace',
    tokenAddress: '0x501acE9c35E60f03A2af4d484f49F9B1EFde9f40',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSOLACE',
    earnedTokenAddress: '0x6027e8CF9A136FC26c54B0c29A190BE52F8b6872',
    earnContractAddress: '0x6027e8CF9A136FC26c54B0c29A190BE52F8b6872',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'SOLACE',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Other',
    assets: ['SOLACE'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MICRO',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'SingleStake',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?outputCurrency=0x501acE9c35E60f03A2af4d484f49F9B1EFde9f40',
    createdAt: 1644436457,
  },
  {
    id: 'tri-solace-near',
    name: 'SOLACE-NEAR LP',
    token: 'SOLACE-NEAR LP',
    tokenDescription: 'Trisolaris',
    tokenAddress: '0xdDAdf88b007B95fEb42DDbd110034C9a8e9746F2',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooTriSOLACE-NEAR',
    earnedTokenAddress: '0x6347C23cd6283E619728854D44FF852A462fBaAc',
    earnContractAddress: '0x6347C23cd6283E619728854D44FF852A462fBaAc',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'tri-solace-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Trisolaris',
    assets: ['SOLACE', 'NEAR'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_HIGH',
      'MCAP_MICRO',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?outputCurrency=0x501acE9c35E60f03A2af4d484f49F9B1EFde9f40',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d/0x501acE9c35E60f03A2af4d484f49F9B1EFde9f40',
    createdAt: 1644438518,
  },
  {
    id: 'tri-atust-near-eol',
    name: 'atUST-NEAR LP',
    token: 'atUST-NEAR LP',
    tokenDescription: 'Trisolaris',
    tokenAddress: '0xa9eded3E339b9cd92bB6DEF5c5379d678131fF90',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooTriatUST-NEAR',
    earnedTokenAddress: '0xd1706A28Bd40EDc85aa11e40eb40f119DDC0A087',
    earnContractAddress: '0xd1706A28Bd40EDc85aa11e40eb40f119DDC0A087',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'tri-atust-near',
    oraclePrice: 0,
    depositsPaused: true,
    status: 'eol',
    retireReason: 'rewards',
    platform: 'Trisolaris',
    assets: ['UST', 'NEAR'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_HIGH',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?outputCurrency=0x5ce9F0B6AFb36135b5ddBF11705cEB65E634A9dC',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d/0x5ce9F0B6AFb36135b5ddBF11705cEB65E634A9dC',
    createdAt: 1644000794,
  },
  {
    id: 'tri-near-atluna-eol',
    name: 'atLUNA-NEAR LP',
    token: 'atLUNA-NEAR LP',
    tokenDescription: 'Trisolaris',
    tokenAddress: '0xdF8CbF89ad9b7dAFdd3e37acEc539eEcC8c47914',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooTriatLUNA-NEAR',
    earnedTokenAddress: '0x068701701C8C2a11EC5B05a015EdD07d1cee6b9f',
    earnContractAddress: '0x068701701C8C2a11EC5B05a015EdD07d1cee6b9f',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'tri-near-atluna',
    oraclePrice: 0,
    depositsPaused: true,
    status: 'eol',
    retireReason: 'rewards',
    platform: 'Trisolaris',
    assets: ['LUNA', 'NEAR'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_HIGH',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?outputCurrency=0xC4bdd27c33ec7daa6fcfd8532ddB524Bf4038096',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d/0xC4bdd27c33ec7daa6fcfd8532ddB524Bf4038096',
    createdAt: 1643993283,
  },
  {
    id: 'tri-aurora-tri',
    name: 'AURORA-TRI LP',
    token: 'AURORA-TRI LP',
    tokenDescription: 'Trisolaris',
    tokenAddress: '0xd1654a7713617d41A8C9530Fb9B948d00e162194',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooTriAURORA-TRI',
    earnedTokenAddress: '0x198d1CfE0D663F52C8b854E6434022A52a27fA1b',
    earnContractAddress: '0x198d1CfE0D663F52C8b854E6434022A52a27fA1b',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'tri-aurora-tri',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Trisolaris',
    assets: ['AURORA', 'TRI'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_HIGH',
      'MCAP_MICRO',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?outputCurrency=0xFa94348467f64D5A457F75F8bc40495D33c65aBB',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79/0xFa94348467f64D5A457F75F8bc40495D33c65aBB',
    createdAt: 1643901440,
  },
  {
    id: 'tri-aurora-weth',
    name: 'AURORA-ETH LP',
    token: 'AURORA-ETH LP',
    tokenDescription: 'Trisolaris',
    tokenAddress: '0x5eeC60F348cB1D661E4A5122CF4638c7DB7A886e',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooTriAURORA-ETH',
    earnedTokenAddress: '0xC9737c178d327b410068a1d0ae2D30ef8e428754',
    earnContractAddress: '0xC9737c178d327b410068a1d0ae2D30ef8e428754',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'tri-aurora-weth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Trisolaris',
    assets: ['AURORA', 'ETH'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_HIGH',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?outputCurrency=0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79/0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
    createdAt: 1643890949,
  },
  {
    id: 'trisolaris-near-tri',
    name: 'NEAR-TRI LP',
    token: 'NEAR-TRI LP',
    tokenDescription: 'Trisolaris',
    tokenAddress: '0x84b123875F0F36B966d0B6Ca14b31121bd9676AD',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooTriNEAR-TRI',
    earnedTokenAddress: '0x43F6De3D9fB0D5EED93d7E7E14A8A526B98f8A58',
    earnContractAddress: '0x43F6De3D9fB0D5EED93d7E7E14A8A526B98f8A58',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-near-tri',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Trisolaris',
    assets: ['NEAR', 'TRI'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_HIGH',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?outputCurrency=0xFa94348467f64D5A457F75F8bc40495D33c65aBB',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d/0xFa94348467f64D5A457F75F8bc40495D33c65aBB',
    createdAt: 1643742934,
  },
  {
    id: 'trisolaris-near-wbtc',
    name: 'NEAR-WBTC LP',
    token: 'NEAR-WBTC LP',
    tokenDescription: 'Trisolaris',
    tokenAddress: '0xbc8A244e8fb683ec1Fd6f88F3cc6E565082174Eb',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooTriNEAR-WBTC',
    earnedTokenAddress: '0x9E2dE72D197d446a149FA6fA8220a7d5fCc9B265',
    earnContractAddress: '0x9E2dE72D197d446a149FA6fA8220a7d5fCc9B265',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-near-wbtc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Trisolaris',
    assets: ['NEAR', 'WBTC'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_HIGH',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?outputCurrency=0xF4eB217Ba2454613b15dBdea6e5f22276410e89e',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d/0xF4eB217Ba2454613b15dBdea6e5f22276410e89e',
    createdAt: 1643739785,
  },
  {
    id: 'trisolaris-usdt-usdc',
    name: 'USDT-USDC LP',
    token: 'USDT-USDC LP',
    tokenDescription: 'Trisolaris',
    tokenAddress: '0x2fe064B6c7D274082aa5d2624709bC9AE7D16C77',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooTriUSDT-USDC',
    earnedTokenAddress: '0x1c9270ac5C42E51611d7b97b1004313D52c80293',
    earnContractAddress: '0x1c9270ac5C42E51611d7b97b1004313D52c80293',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-usdt-usdc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Trisolaris',
    assets: ['USDC', 'USDT'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_HIGH',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?outputCurrency=0xB12BFcA5A55806AaF64E99521918A4bf0fC40802',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0x4988a896b1227218e4A686fdE5EabdcAbd91571f/0xB12BFcA5A55806AaF64E99521918A4bf0fC40802',
    createdAt: 1643737307,
  },
  {
    id: 'trisolaris-usdt-near',
    name: 'NEAR-USDT LP',
    token: 'NEAR-USDT LP',
    tokenDescription: 'Trisolaris',
    tokenAddress: '0x03B666f3488a7992b2385B12dF7f35156d7b29cD',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooTriNEAR-USDT',
    earnedTokenAddress: '0x9E6Dcce0Fe2dcf0C961e71Cd480215754d6C2490',
    earnContractAddress: '0x9E6Dcce0Fe2dcf0C961e71Cd480215754d6C2490',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-usdt-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Trisolaris',
    assets: ['NEAR', 'USDT'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_HIGH',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?outputCurrency=0x4988a896b1227218e4A686fdE5EabdcAbd91571f',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d/0x4988a896b1227218e4A686fdE5EabdcAbd91571f',
    createdAt: 1643740691,
  },
  {
    id: 'trisolaris-usdc-near',
    name: 'NEAR-USDC LP',
    token: 'NEAR-USDC LP',
    tokenDescription: 'Trisolaris',
    tokenAddress: '0x20F8AeFB5697B77E0BB835A8518BE70775cdA1b0',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooTriNEAR-USDC',
    earnedTokenAddress: '0x240233b447D841C84BDFAe17bDe759e8c227a753',
    earnContractAddress: '0x240233b447D841C84BDFAe17bDe759e8c227a753',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-usdc-near',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Trisolaris',
    assets: ['NEAR', 'USDC'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_HIGH',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?outputCurrency=0xB12BFcA5A55806AaF64E99521918A4bf0fC40802',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d/0xB12BFcA5A55806AaF64E99521918A4bf0fC40802',
    createdAt: 1643740953,
  },
  {
    id: 'trisolaris-near-weth',
    name: 'NEAR-ETH LP',
    token: 'NEAR-ETH LP',
    tokenDescription: 'Trisolaris',
    tokenAddress: '0x63da4DB6Ef4e7C62168aB03982399F9588fCd198',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooTriNEAR-ETH',
    earnedTokenAddress: '0x939c13c8055fEAac5aDB70Bad2e8b465019bbC08',
    earnContractAddress: '0x939c13c8055fEAac5aDB70Bad2e8b465019bbC08',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'trisolaris-near-weth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Trisolaris',
    assets: ['NEAR', 'ETH'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_HIGH',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    buyTokenUrl:
      'https://www.trisolaris.io/#/swap?outputCurrency=0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d',
    addLiquidityUrl:
      'https://www.trisolaris.io/#/add/0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d/0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
    createdAt: 1643741153,
  },
];
