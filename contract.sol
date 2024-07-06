// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GameToken is ERC20, Ownable {
    constructor(uint256 initialSupply) ERC20("GameToken", "GTN") {
        _mint(msg.sender, initialSupply);
    }

    // Function to mint new tokens
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    // Function to burn tokens
    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }

    // Function to get total supply
    function getTotalSupply() public view returns (uint256) {
        return totalSupply();
    }

    // Function to get balance of a specific address
    function getBalance(address account) public view returns (uint256) {
        return balanceOf(account);
    }
}
