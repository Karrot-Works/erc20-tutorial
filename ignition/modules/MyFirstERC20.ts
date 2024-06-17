import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const TokenModule = buildModule("MyFirstERC20", (m) => {
    const token = m.contract("MyFirstERC20");
  
    return { token };
  });
  
module.exports = TokenModule;
