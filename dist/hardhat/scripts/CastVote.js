"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const dotenv = require("dotenv");
dotenv.config();
const typechain_types_1 = require("../typechain-types");
async function castVote() {
    const parameters = process.argv.slice(2);
    if (parameters.length < 3)
        throw new Error("Parameters not found");
    const walletPrivateKey = parameters[0];
    const indexOfProposalToGiveVote = parameters[1];
    const amountOfVotingPowerToCast = parameters[2];
    const parsedAmounOfVotingPowerToCast = ethers_1.ethers.parseUnits(amountOfVotingPowerToCast);
    const provider = new ethers_1.ethers.JsonRpcProvider(process.env.RPC_ENDPOINT_URL ?? "");
    const wallet = new ethers_1.ethers.Wallet(walletPrivateKey ?? "", provider);
    console.log(`Using address ${wallet.address}`);
    const Walletbalance = await provider.getBalance(wallet.address);
    const balance = Number(ethers_1.ethers.formatUnits(Walletbalance));
    console.log(`Wallet balance ${balance} ETH`);
    if (balance < 0.01) {
        throw new Error("Not enough ether");
    }
    const tokenizedBallotContract = new typechain_types_1.TokenizedBallot__factory(wallet);
    const tokenizedBallotFactory = tokenizedBallotContract.attach(process.env.TOKENIZED_BALLOT_CONTRACT_ADDRESS ?? "");
    const votesBefore = await tokenizedBallotFactory.votingPower(wallet);
    console.log(`Voting power of address ${wallet.address} before voting is ${votesBefore.toString()}.\n`);
    console.log(`Voting for proposal at index ${indexOfProposalToGiveVote}....`);
    const voteTx = await tokenizedBallotFactory.vote(indexOfProposalToGiveVote, parsedAmounOfVotingPowerToCast);
    await voteTx.wait();
    const votesAfter = await tokenizedBallotFactory.votingPower(wallet);
    console.log(`Voting power of address ${wallet.address} after voting is ${votesAfter.toString()}.\n`);
}
castVote().catch((error) => {
    console.log(error);
    process.exitCode = 1;
});
//# sourceMappingURL=CastVote.js.map