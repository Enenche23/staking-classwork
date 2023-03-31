import { ethers } from "hardhat";
async function main() {
    const [owner] = await ethers.getSigners();
    const getcontract = await ethers.getContractFactory("MyLaunchpad");
    const deploycontract = await getcontract.deploy();
    const deployedcontract = await deploycontract.deployed();
    const getcontractaddress = deployedcontract.address;
    console.log(`Launchpad address ${getcontractaddress}`);
    
    }

    // We recommend this pattern to be able to use async/await everywhere
    // and properly handle errors.
    main().catch((error) => {
        console.error(error);
        process.exitCode = 1;
        });