const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

const contractAddress = "YOUR_CONTRACT_ADDRESS";
const contractABI = [
    // ABI details here
];

const contract = new web3.eth.Contract(contractABI, contractAddress);

async function getTotalSupply() {
    const totalSupply = await contract.methods.getTotalSupply().call();
    document.getElementById("totalSupply").innerText = `Total Supply: ${totalSupply}`;
}

async function getBalance() {
    const address = document.getElementById("balanceAddress").value;
    const balance = await contract.methods.getBalance(address).call();
    document.getElementById("balanceResult").innerText = `Balance: ${balance}`;
}
