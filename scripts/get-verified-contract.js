const hre = require("hardhat");
require("hardhat-etherscan-abi");

getABI = async addr => {
  const contract = await hre.ethers.getVerifiedContractAt(addr)
  console.log(JSON.stringify(contract))
}

getABI('0xdA0B1269C0fFC29583AE952E5e3Cde5da0A4b944')