import { type ContractRunner } from "ethers";
import type { IERC6372, IERC6372Interface } from "../../../../@openzeppelin/contracts/interfaces/IERC6372";
export declare class IERC6372__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "CLOCK_MODE";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "clock";
        readonly outputs: readonly [{
            readonly internalType: "uint48";
            readonly name: "";
            readonly type: "uint48";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IERC6372Interface;
    static connect(address: string, runner?: ContractRunner | null): IERC6372;
}
