// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract MyFirstERC20 is ERC20 {
    constructor() ERC20("MyFirstERC20", "MFE") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}


