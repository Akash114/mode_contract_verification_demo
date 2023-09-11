# Project Name

## Description

Briefly describe your project and the smart contract you want to verify. Mention the purpose of the contract and its main functionality.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Verifying the Smart Contract with Hardhat](#verifying-the-smart-contract-with-hardhat)


## Getting Started

Provide instructions for setting up and running the project.

### Prerequisites

List any software or tools that users need to have installed before they can use your project. For example:

- [Node.js](https://nodejs.org/)

### Installation

Guide users on how to install the project and its dependencies. You can use code blocks to show terminal commands:

```markdown
git clone https://github.com/yourusername/your-project.git
cd your-project
npm install

```

## Usage

To use this project and verify the smart contract using Hardhat, follow these steps:

### 1. Install Hardhat

If you haven't already, install Hardhat globally or locally in your project:

```markdown
npm install --save-dev hardhat
```
### 2. Install Hardhat Verify Plugin

Install the Hardhat Verify plugin as a development dependency:

```markdown
npm install --save-dev hardhat
```

### 3. Configure Hardhat
Use the provided hardhat.config.js file and customize it as needed. Be sure to add your private key and API key to the .env file.

```markdown
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("dotenv").config({ path: __dirname + "/.env" });

module.exports = {
  solidity: "0.8.10",

  networks: {
    mode: {
      url: "https://sepolia.mode.network/",
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 35000000000,
      saveDeployments: true,
    },
  },

  etherscan: {
    apiKey: {
      mode: process.env.API_KEY,
    },
    customChains: [
      {
        network: "mode",
        chainId: 919,
        urls: {
          apiURL: "https://sepolia.explorer.mode.network/api",
          browserURL: "https://sepolia.explorer.mode.network/",
        },
      },
    ],
  },
};
```

### 4. Deploy the Smart Contract
Create a deploy.js script or use an existing one to deploy your smart contract to the Ethereum network.


```markdown
npx hardhat run scripts/deploy.js --network mode
```

### 5. Verify the Smart Contract
After deploying your smart contract, use the following Hardhat command to verify it on the Mode network:


```markdown
npx hardhat verify --network mode CONTRACT_ADDRESS "Constructor argument 1" "Constructor argument 2" ...
```
Replace the placeholders:

- CONTRACT_ADDRESS: Replace with the address where your smart contract was deployed.
- "Constructor argument 1", "Constructor argument 2", etc.: Include them if your contract constructor requires arguments.

