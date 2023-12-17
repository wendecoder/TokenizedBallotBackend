"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const dotenv = require("dotenv");
const typechain_types_1 = require("../typechain-types");
dotenv.config();
async function queryResult() {
    const provider = new ethers_1.ethers.JsonRpcProvider(process.env.RPC_ENDPOINT_URL ?? "");
    const wallet = new ethers_1.ethers.Wallet(process.env.PRIVATE_KEY ?? "", provider);
    console.log(`Using wallet address ${wallet.address}`);
    const Walletbalance = await provider.getBalance(wallet.address);
    const balance = Number(ethers_1.ethers.formatUnits(Walletbalance));
    console.log(`Wallet balance ${balance} ETH`);
    if (balance < 0.01) {
        throw new Error("Not enough ether");
    }
    const tokenizedBallotContract = new typechain_types_1.TokenizedBallot__factory(wallet);
    const tokenizedBallotFactory = tokenizedBallotContract.attach(process.env.TOKENIZED_BALLOT_CONTRACT_ADDRESS ?? "");
    const winningProposal = await tokenizedBallotFactory.winningProposal();
    const winnerName = await tokenizedBallotFactory.winnerName();
    const decodedwinnerName = ethers_1.ethers.decodeBytes32String(winnerName);
    console.log(`Winning Proposal Index: ${winningProposal}`);
    console.log(`Winner Name: ${decodedwinnerName}`);
}
queryResult().catch((error) => {
    console.log(error);
    process.exitCode = 1;
});
//# sourceMappingURL=queryResult.js.map