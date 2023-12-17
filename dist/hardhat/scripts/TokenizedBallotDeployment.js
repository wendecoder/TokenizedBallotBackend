"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const dotenv = require("dotenv");
dotenv.config();
const typechain_types_1 = require("../typechain-types");
async function main() {
    const proposals = process.argv.slice(2);
    if (!proposals || proposals.length < 1)
        throw new Error("Proposals not provided");
    console.log("~~~~~~~~~~~~~ Deploying MyToken and TokenizedBallot contracts ~~~~~~~~~~~~~");
    console.log("Proposals: ");
    proposals.forEach((element, index) => {
        console.log(`Proposal N. ${index + 1}: ${element}`);
    });
    const provider = new ethers_1.ethers.JsonRpcProvider(process.env.RPC_ENDPOINT_URL ?? "");
    const wallet = new ethers_1.ethers.Wallet(process.env.PRIVATE_KEY ?? "", provider);
    console.log(`Using address ${wallet.address}`);
    const Walletbalance = await provider.getBalance(wallet.address);
    const balance = Number(ethers_1.ethers.formatUnits(Walletbalance));
    console.log(`Wallet balance ${balance} ETH`);
    if (balance < 0.01) {
        throw new Error("Not enough ether");
    }
    const currentBlockNumber = await provider.getBlockNumber();
    const targetBlockNumber = currentBlockNumber - 1;
    const TokenizedBallotFactory = new typechain_types_1.TokenizedBallot__factory(wallet);
    const tokenizedBallot = await TokenizedBallotFactory.deploy(proposals.map(ethers_1.ethers.encodeBytes32String), process.env.MY_TOKEN_CONTRACT_ADDRESS ?? "", targetBlockNumber);
    console.log("Waiting for TokenizedBallot deployment...");
    await tokenizedBallot.waitForDeployment();
    console.log(`TokenizedBallot deployed to ${tokenizedBallot.target}`);
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
//# sourceMappingURL=TokenizedBallotDeployment.js.map