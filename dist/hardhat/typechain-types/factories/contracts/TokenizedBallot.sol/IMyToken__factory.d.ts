import { type ContractRunner } from "ethers";
import type { IMyToken, IMyTokenInterface } from "../../../contracts/TokenizedBallot.sol/IMyToken";
export declare class IMyToken__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "getPastVotes";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IMyTokenInterface;
    static connect(address: string, runner?: ContractRunner | null): IMyToken;
}
