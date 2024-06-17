# Tutorial: Deploy ERC20 Token on Kakarot Sepolia

This repository contains the code for the tutorial on how to deploy an ERC20 token on Kakarot Sepolia. You could find the tutorial [here](https://medium.com/kakarot-zkevm/tutorial-deploy-your-first-erc-20-token-on-kakarot-4d847fc0a9b6).

## Prerequisites

Replace the following values in the `hardhat.config.ts` file with your own values:

- `YOUR_PRIVATE_KEY`: Replace this with your private key.

Please note that the private key is for demonstration purposes only. You should never expose your private key in a public repository.

It is recommended to use environment variables to store your private key. 

## Get Started

### 1. Clone the repository

```bash
git clone https://github.com/Karrot-Works/erc20-tutorial.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Compile the smart contract

```bash
npx hardhat compile
```

### 4. Deploy the smart contract

```bash
npx hardhat ignition deploy ./ignition/modules/MyFirstERC20.ts --network kakarot-sepolia
```

### 5. Verify the smart contract

```bash
npx hardhat verify --network kakarot-sepolia <YOUR_SMART_CONTRACT_ADDRESS> 
```


