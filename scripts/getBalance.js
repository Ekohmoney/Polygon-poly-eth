const hre = require("hardhat");
const contractJSON = require("../artifacts/contracts/EkohToken.sol/EkohToken.json");

const contractAddress = "0x46162ca0FA3dA6d92432653d4CfCf0774a14Fb93";
const contractABI = contractJSON.abi;
const walletAddress = "0x4bbB77213eEd76a3aA2c4CAAFB07BfF19677ca71";

async function main() {
  const contract = await hre.ethers.getContractAt(contractABI, contractAddress);

  console.log(
    `${walletAddress} has: ${await contract.balanceOf(walletAddress)} NFTs`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
