require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: process.env.SEPOLIARPC,
      // @ts-ignore
      accounts: [process.env.PRIVATEKEY],
    },
    hardhat: {
      forking: {
        // @ts-ignore
        url: process.env.SEPOLIARPC,
      },
    },
  },
  etherscan: {
    apiKey: process.env.API_KEY,
  },
};
