require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();


module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.5.16"  
      },
      {
        version: "0.6.6"  
      }
    ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 200 // Adjust the number of runs for optimization
      }
    }
  },
  networks: {
    baseSepolia: {
      url: "https://sepolia.base.org",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 84532
    }
  },
  etherscan: {
    apiKey: {
      baseSepolia: 'AEAU427IQFAWDHN4NM8YE64HPWQPKKEA9B'
    }
  }
  // etherscan : {
  //   url: "https://api.etherscan.io/api",
  //   apiKey : {
  //     sepolia : 'AEAU427IQFAWDHN4NM8YE64HPWQPKKEA9B'
  //   }
  // },
  // sourcify: {
  //   enabled: true
  // }
};