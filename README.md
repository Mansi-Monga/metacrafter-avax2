


## Overview

This project involves creating an ERC20 token  on the Avalanche blockchain. The project includes a smart contract with functions to mint and burn tokens, check total supply and balance of a specific address. Additionally, a simple frontend application is provided to interact with the smart contract.

## Prerequisites

- Node.js and npm installed
- Truffle installed globally: `npm install -g truffle`
- Ganache (for local development)
- MetaMask extension for your browser
- Avalanche wallet and endpoint (if deploying on Avalanche)


```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/my-project.git
   cd my-project
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Smart Contract

The smart contract `GameToken.sol` is an ERC20 token with additional functions for minting, burning, and checking balances.

### Deployment

1. **Local Development**:
   Start Ganache or any other local blockchain.
   ```bash
   truffle migrate --network development
   ```

2. **Avalanche Network**:
   Make sure you have the mnemonic and endpoint for Avalanche.
   ```bash
   truffle migrate --network avalanche
   ```

## Frontend

The frontend is a simple HTML and JavaScript application that interacts with the `GameToken` smart contract.

### Setup

1. Update the `app.js` file:
   - Replace `YOUR_CONTRACT_ADDRESS` with the deployed contract address.
   - Replace `// ABI details here` with the actual ABI from `code.json`.

2. Open `index.html` in your browser and connect it to MetaMask or any other Web3 provider.

### Usage

- **Total Supply**: Click the "Get Total Supply" button to display the total supply of the tokens.
- **Check Balance**: Enter an address and click "Check Balance" to display the token balance of that address.

## Files

### `truffle-config.js`

Configuration file for Truffle, specifying networks and compiler settings.

### `migrations/2_deploy_contracts.js`

Migration script for deploying the `GameToken` contract.

### `.gitkeep`

Placeholder file to keep empty directories under version control.

### `code.json`

Stores the ABI and contract address after deployment.

### `scripts/deploy.js`

Script to deploy the contract and save the ABI and address to `code.json`.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgements

- [OpenZeppelin](https://openzeppelin.com/contracts/) for their ERC20 implementation.
- [Truffle](https://www.trufflesuite.com/) for the development framework.
- [Avalanche](https://www.avax.network/) for the blockchain network.

```

Replace the placeholder values such as `https://github.com/yourusername/my-project.git` and `"YOUR_CONTRACT_ADDRESS"` with the actual values relevant to your project. This `README.md` file provides a clear guide for setting up, deploying, and interacting with your smart contract and frontend application.
