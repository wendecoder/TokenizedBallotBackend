import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { ShortStrings, ShortStringsInterface } from "../../../../@openzeppelin/contracts/utils/ShortStrings";
type ShortStringsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ShortStrings__factory extends ContractFactory {
    constructor(...args: ShortStringsConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ShortStrings & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): ShortStrings__factory;
    static readonly bytecode = "0x60566050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212207b070ef87ce2a8f6655559d6f80d60474a249a271498b7f3a2015ffd3f9e066a64736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "InvalidShortString";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "str";
            readonly type: "string";
        }];
        readonly name: "StringTooLong";
        readonly type: "error";
    }];
    static createInterface(): ShortStringsInterface;
    static connect(address: string, runner?: ContractRunner | null): ShortStrings;
}
export {};
