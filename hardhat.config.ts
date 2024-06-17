import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  defaultNetwork: "kakarot-sepolia",
  networks: {
    "kakarot-sepolia": {
      url: "https://sepolia-rpc.kakarot.org",
      accounts: ['<YOUR_PRIVATE_KEY>']
    }
  },
  solidity: "0.8.24",
  ignition: {
    blockPollingInterval: 3_000,
    timeBeforeBumpingFees: 3 * 60 * 1_000,
    maxFeeBumps: 0,
    requiredConfirmations: 1,
  },
  etherscan: {
    apiKey: {
      "kakarot-sepolia": "testnet/evm/1802203764"
    },
    customChains: [
      {
        network: "kakarot-sepolia",
        chainId: 1802203764,
        urls: {
          apiURL: "https://api.routescan.io/v2/network/testnet/evm/1802203764_2/etherscan",
          browserURL: "https://routescan.io"
        }
      }
    ]
  }
};
export default config;
