require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
// require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
require("dotenv").config({ path: __dirname + "/.env" });

module.exports = {
  solidity: "0.8.10",

  networks: {
    mode: {
      url: "https://sepolia.mode.network/", // URL of the mode network
      accounts: [process.env.PRIVATE_KEY], // Array of private keys to use for deployment
      gasPrice: 35000000000, // Gas price for transactions on this network
      saveDeployments: true, // Save deployment information
    },
  },

  etherscan: {
    apiKey: {
      mode: process.env.API_KEY, // Replace with your actual API key
    },
    customChains: [
      {
        network: "mode", // Use the same network name as defined in networks
        chainId: 919, // Replace with the actual chain ID of the mode network
        urls: {
          apiURL: "https://sepolia.explorer.mode.network/api", // API URL for the mode network
          browserURL: "https://sepolia.explorer.mode.network/", // Browser URL for the mode network
        },
      },
    ],
  },
};