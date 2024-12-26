const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with account:", deployer.address);

  const feeToSetter = "0x83A81f738cc8cE8e5125c27B86379974aCa090A4";
  
  const UniswapV2Factory = await ethers.getContractFactory("UniswapV2Factory");
  const factory = await UniswapV2Factory.deploy(feeToSetter);
  await factory.waitForDeployment(); 
  const factoryAddress = await factory.getAddress(); 
  console.log("UniswapV2Factory deployed to:", factoryAddress);  
  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });