"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const dotenv = require("dotenv");
dotenv.config();
const typechain_types_1 = require("../typechain-types");
const MINT_VALUE = ethers_1.ethers.parseUnits("10");
async function main() {
    const provider = new ethers_1.ethers.JsonRpcProvider(process.env.RPC_ENDPOINT_URL ?? "");
    const wallet = new ethers_1.ethers.Wallet(process.env.PRIVATE_KEY ?? "", provider);
    console.log(`Using address ${wallet.address}`);
    const Walletbalance = await provider.getBalance(wallet.address);
    const balance = Number(ethers_1.ethers.formatUnits(Walletbalance));
    console.log(`Wallet balance ${balance} ETH`);
    if (balance < 0.01) {
        throw new Error("Not enough ether");
    }
    const myTokenFactory = new typechain_types_1.MyToken__factory(wallet);
    const myTokenContract = await myTokenFactory.deploy();
    console.log("Waiting for deployment...");
    await myTokenContract.waitForDeployment();
    console.log(`Contract deployed to ${myTokenContract.target}`);
    const mintTx = await myTokenContract.mint(process.env.WALLET_ADDRESS_TO_MINT_TO ?? "", MINT_VALUE);
    await mintTx.wait();
    console.log(`Minted ${MINT_VALUE.toString()} decimal units to account ${process.env.WALLET_ADDRESS_TO_MINT_TO ?? ""}\n`);
    const balanceBN = await myTokenContract.balanceOf(process.env.WALLET_ADDRESS_TO_MINT_TO ?? "");
    console.log(`Account ${process.env.WALLET_ADDRESS_TO_MINT_TO ?? ""} has ${balanceBN.toString()} decimal units of MyToken\n`);
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
//# sourceMappingURL=MyTokenDeployment.js.map