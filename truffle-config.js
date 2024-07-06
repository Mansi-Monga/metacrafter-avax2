module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },
    avalanche: {
      provider: () => new HDWalletProvider(mnemonic, `https://api.avax.network/ext/bc/C/rpc`),
      network_id: 43114,
      gas: 8000000,
      gasPrice: 225000000000,
    },
  },
  compilers: {
    solc: {
      version: "0.8.0", // Fetch exact version from solc-bin (default: truffle's version)
    },
  },
};
