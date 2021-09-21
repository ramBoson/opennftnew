export const ALGORAND_LEDGER = 'TestNet';
export const USDC_ID = 14001707;
export const USDC_DECIMAL_POINTS = 2;
export const ASSET_URL = 'https://api.googly.network';
export var BACKEND_URL;
if (process.env.NODE_ENV === 'development') {
  BACKEND_URL = 'https://api.googly.network';
} else {
  BACKEND_URL = 'https://api.googly.network';
}
