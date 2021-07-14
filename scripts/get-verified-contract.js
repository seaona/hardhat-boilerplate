const hre = require("hardhat");
require("hardhat-etherscan-abi");

async function getVerifiedContract() {

  const contract = await JSON.stringify(hre.ethers.getVerifiedContractAt('0xb3cFc929994acEB2821601b3bB11dc74087aBD6B'));
  console.log(`Contract ABI ${contract}`)

}

getVerifiedContract()