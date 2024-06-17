# Tutorial: Deploy ERC20 Token on Kakarot Sepolia

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


