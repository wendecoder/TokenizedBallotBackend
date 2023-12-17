"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const dotenv = require("dotenv");
dotenv.config();
const typechain_types_1 = require("../typechain-types");
async function delegate() {
    const parameters = process.argv.slice(2);
    if (!parameters || parameters.length < 2)
        throw new Error("Parameters not provided");
    const addressToDelegateTo = parameters[0];
    const walletPrivateKey = parameters[1];
    const provider = new ethers_1.ethers.JsonRpcProvider(process.env.RPC_ENDPOINT_URL ?? "");
    const contract_address = process.env.MY_TOKEN_CONTRACT_ADDRESS;
    const wallet = new ethers_1.ethers.Wallet(walletPrivateKey ?? "", provider);
    console.log(wallet);
    console.log(`Using address ${wallet.address}`);
    const Walletbalance = await provider.getBalance(wallet.address);
    const balance = Number(ethers_1.ethers.formatUnits(Walletbalance));
    console.log(`Wallet balance ${balance} ETH`);
    if (balance < 0.01) {
        throw new Error("Not enough ether");
    }
    const myTokenContract = new typechain_types_1.MyToken__factory(wallet);
    const myTokenFactory = myTokenContract.attach(contract_address ?? "");
    console.log(`Waiting for delegating to the address ${addressToDelegateTo}....`);
    const delegateTx = await myTokenFactory.delegate(addressToDelegateTo);
    await delegateTx.wait();
    const votesAfter = await myTokenFactory.getVotes(addressToDelegateTo);
    console.log(`Account ${addressToDelegateTo} has ${votesAfter.toString()} units of voting power after delegating\n`);
}
delegate().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
//# sourceMappingURL=delegateVotingPower.js.map