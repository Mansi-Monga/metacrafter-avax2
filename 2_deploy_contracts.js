const GameToken = artifacts.require("GameToken");

module.exports = function(deployer) {
  const initialSupply = web3.utils.toWei("1000", "ether"); // Initial supply of 1000 tokens
  deployer.deploy(GameToken, initialSupply);
};
