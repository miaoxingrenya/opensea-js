import { WyvernProtocol } from "wyvern-js";

export const DEFAULT_GAS_INCREASE_FACTOR = 1.01;
export const NULL_ADDRESS = WyvernProtocol.NULL_ADDRESS;
export const NULL_BLOCK_HASH =
  "0x0000000000000000000000000000000000000000000000000000000000000000";
export const OPENSEA_FEE_RECIPIENT =
  "0x5b3256965e7c3cf26e11fcaf296dfc8807c01073";
export const INVERSE_BASIS_POINT = 10000;
export const MAX_UINT_256 = WyvernProtocol.MAX_UINT_256;
export const ENJIN_COIN_ADDRESS = "0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c";
export const MANA_ADDRESS = "0x0f5d2fb29fb7d3cfee444a200298f468908cc942";
export const ENJIN_ADDRESS = "0xfaaFDc07907ff5120a76b34b731b278c38d6043C";
export const ENJIN_LEGACY_ADDRESS =
  "0x8562c38485B1E8cCd82E44F89823dA76C98eb0Ab";
export const CK_ADDRESS = "0x06012c8cf97bead5deae237070f9587f8e7a266d";
export const CK_RINKEBY_ADDRESS = "0x16baf0de678e52367adc69fd067e5edd1d33e3bf";
export const WRAPPED_NFT_FACTORY_ADDRESS_MAINNET =
  "0xf11b5815b143472b7f7c52af0bfa6c6a2c8f40e1";
export const WRAPPED_NFT_FACTORY_ADDRESS_RINKEBY =
  "0x94c71c87244b862cfd64d36af468309e4804ec09";
export const WRAPPED_NFT_LIQUIDATION_PROXY_ADDRESS_MAINNET =
  "0x995835145dd85c012f3e2d7d5561abd626658c04";
export const WRAPPED_NFT_LIQUIDATION_PROXY_ADDRESS_RINKEBY =
  "0xaa775Eb452353aB17f7cf182915667c2598D43d3";
export const UNISWAP_FACTORY_ADDRESS_MAINNET =
  "0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95";
export const UNISWAP_FACTORY_ADDRESS_RINKEBY =
  "0xf5D915570BC477f9B8D6C0E980aA81757A3AaC36";
export const DEFAULT_WRAPPED_NFT_LIQUIDATION_UNISWAP_SLIPPAGE_IN_BASIS_POINTS = 1000;
export const CHEEZE_WIZARDS_GUILD_ADDRESS = WyvernProtocol.NULL_ADDRESS; // TODO: Update this address once Dapper has deployed their mainnet contracts
export const CHEEZE_WIZARDS_GUILD_RINKEBY_ADDRESS =
  "0x095731b672b76b00A0b5cb9D8258CD3F6E976cB2";
export const CHEEZE_WIZARDS_BASIC_TOURNAMENT_ADDRESS =
  WyvernProtocol.NULL_ADDRESS; // TODO: Update this address once Dapper has deployed their mainnet contracts
export const CHEEZE_WIZARDS_BASIC_TOURNAMENT_RINKEBY_ADDRESS =
  "0x8852f5F7d1BB867AAf8fdBB0851Aa431d1df5ca1";
export const DECENTRALAND_ESTATE_ADDRESS =
  "0x959e104e1a4db6317fa58f8295f586e1a978c297";
export const STATIC_CALL_TX_ORIGIN_ADDRESS =
  "0xbff6ade67e3717101dd8d0a7f3de1bf6623a2ba8";
export const STATIC_CALL_TX_ORIGIN_RINKEBY_ADDRESS =
  "0xe291abab95677bc652a44f973a8e06d48464e11c";
export const STATIC_CALL_CHEEZE_WIZARDS_ADDRESS = WyvernProtocol.NULL_ADDRESS; // TODO: Deploy this address once Dapper has deployed their mainnet contracts
export const STATIC_CALL_CHEEZE_WIZARDS_RINKEBY_ADDRESS =
  "0x8a640bdf8886dd6ca1fad9f22382b50deeacde08";
export const STATIC_CALL_DECENTRALAND_ESTATES_ADDRESS =
  "0x93c3cd7ba04556d2e3d7b8106ce0f83e24a87a7e";
export const DEFAULT_BUYER_FEE_BASIS_POINTS = 0;
export const DEFAULT_SELLER_FEE_BASIS_POINTS = 250;
export const OPENSEA_SELLER_BOUNTY_BASIS_POINTS = 100;
export const DEFAULT_MAX_BOUNTY = DEFAULT_SELLER_FEE_BASIS_POINTS;
export const MIN_EXPIRATION_SECONDS = 10;
export const ORDER_MATCHING_LATENCY_SECONDS = 60 * 60 * 24 * 7;
export const SELL_ORDER_BATCH_SIZE = 3;
export const ORDERBOOK_VERSION = 1 as number;
export const API_BASE_MAINNET = "https://api.opensea.io";
export const API_BASE_RINKEBY = "http://192.168.0.130:8080";
export const SITE_HOST_MAINNET = "https://opensea.io";
export const SITE_HOST_RINKEBY = "https://rinkeby.opensea.io";
export const RPC_URL_PATH = "api/v1/";
export const MAINNET_PROVIDER_URL = `https://mainnet.infura.io/v3/b5292b0baa094c2e89167e5160ac225c`;
export const RINKEBY_PROVIDER_URL = `https://rinkeby.infura.io/v3/b5292b0baa094c2e89167e5160ac225c`;
export const ORDERBOOK_PATH = `/api/v${ORDERBOOK_VERSION}`;
export const API_PATH = `/api/v${ORDERBOOK_VERSION}`;
