import { CHAIN_IDS } from '../../../shared/constants/network';

export const SINGLE_CALL_BALANCES_ADDRESSES = {
  [CHAIN_IDS.MAINNET]: '0xb1f8e55c7f64d203c1400b9d8555d050f94adf39',
  [CHAIN_IDS.GOERLI]: '0x9788C4E93f9002a7ad8e72633b11E8d1ecd51f9b',
  // TODO(SEPOLIA) There is currently no balance call address for Sepolia
  [CHAIN_IDS.SEPOLIA]: '',
  [CHAIN_IDS.BSC]: '0x2352c63A83f9Fd126af8676146721Fa00924d7e4',
  [CHAIN_IDS.OPTIMISM]: '0xB1c568e9C3E6bdaf755A60c7418C269eb11524FC',
  [CHAIN_IDS.POLYGON]: '0x2352c63A83f9Fd126af8676146721Fa00924d7e4',
  [CHAIN_IDS.AVALANCHE]: '0xD023D153a0DFa485130ECFdE2FAA7e612EF94818',
  [CHAIN_IDS.FANTOM]: '0x07f697424ABe762bB808c109860c04eA488ff92B',
  [CHAIN_IDS.ARBITRUM]: '0x151E24A486D7258dd7C33Fb67E4bB01919B7B32c',
};