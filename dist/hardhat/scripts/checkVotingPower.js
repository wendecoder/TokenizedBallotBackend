"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const dotenv = require("dotenv");
const typechain_types_1 = require("../typechain-types");
dotenv.config();
async function checkVotePower() {
    const parameters = process.argv.slice(2);
    if (parameters.length < 1)
        throw new Error("Parameters not defined");
    const WalletPrivateKey = parameters[0];
    const provider = new ethers_1.ethers.JsonRpcProvider(process.env.RPC_ENDPOINT_URL ?? "");
    const wallet = new ethers_1.ethers.Wallet(WalletPrivateKey ?? "", provider);
    console.log(`Using address ${wallet.address}`);
    const Walletbalance = await provider.getBalance(wallet.address);
    const balance = Number(ethers_1.ethers.formatUnits(Walletbalance));
    console.log(`Wallet balance ${balance} ETH`);
    if (balance < 0.01) {
        throw new Error("Not enough ether");
    }
    const tokenizedBallotContract = new typechain_types_1.TokenizedBallot__factory(wallet);
    const tokenizedBallotFactory = tokenizedBallotContract.attach(process.env.TOKENIZED_BALLOT_CONTRACT_ADDRESS ?? "");
    const VotePower = await tokenizedBallotFactory.votingPower(wallet);
    console.log(`Voting power of an account with address ${wallet.address} is ${VotePower}.`);
}
checkVotePower().catch((error) => {
    console.log(error);
    process.exitCode = 1;
});
//# sourceMappingURL=checkVotingPower.js.map