const hre = require("hardhat");
const contractJSON = require("../artifacts/contracts/EkohToken.sol/EkohToken.json");
require("dotenv").config();

const contractAddress = "0x46162ca0FA3dA6d92432653d4CfCf0774a14Fb93";
const contractABI = contractJSON.abi;

async function main() {
  const contract = await hre.ethers.getContractAt(contractABI, contractAddress);
  const totalNFTs = await contract.totalSupply();

  for (let i = 0; i < totalNFTs; i++) {
    console.log(`Prompt ${i + 1}: ${await contract.promtDescription(i)}`);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
