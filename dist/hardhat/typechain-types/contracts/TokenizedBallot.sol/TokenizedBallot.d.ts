import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../common";
export interface TokenizedBallotInterface extends Interface {
    getFunction(nameOrSignature: "VOTING_POWER_CALLER_ROLE" | "proposals" | "remainingVotingPower" | "targetBlockNumber" | "targetContract" | "vote" | "votingPower" | "winnerName" | "winningProposal"): FunctionFragment;
    encodeFunctionData(functionFragment: "VOTING_POWER_CALLER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposals", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "remainingVotingPower", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "targetBlockNumber", values?: undefined): string;
    encodeFunctionData(functionFragment: "targetContract", values?: undefined): string;
    encodeFunctionData(functionFragment: "vote", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "votingPower", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "winnerName", values?: undefined): string;
    encodeFunctionData(functionFragment: "winningProposal", values?: undefined): string;
    decodeFunctionResult(functionFragment: "VOTING_POWER_CALLER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remainingVotingPower", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "targetBlockNumber", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "targetContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "votingPower", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "winnerName", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "winningProposal", data: BytesLike): Result;
}
export interface TokenizedBallot extends BaseContract {
    connect(runner?: ContractRunner | null): TokenizedBallot;
    waitForDeployment(): Promise<this>;
    interface: TokenizedBallotInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    VOTING_POWER_CALLER_ROLE: TypedContractMethod<[], [string], "view">;
    proposals: TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [string, bigint] & {
            name: string;
            voteCount: bigint;
        }
    ], "view">;
    remainingVotingPower: TypedContractMethod<[
        arg0: AddressLike
    ], [
        bigint
    ], "view">;
    targetBlockNumber: TypedContractMethod<[], [bigint], "view">;
    targetContract: TypedContractMethod<[], [string], "view">;
    vote: TypedContractMethod<[
        proposal: BigNumberish,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    votingPower: TypedContractMethod<[account: AddressLike], [bigint], "view">;
    winnerName: TypedContractMethod<[], [string], "view">;
    winningProposal: TypedContractMethod<[], [bigint], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "VOTING_POWER_CALLER_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "proposals"): TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [string, bigint] & {
            name: string;
            voteCount: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "remainingVotingPower"): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "targetBlockNumber"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "targetContract"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "vote"): TypedContractMethod<[
        proposal: BigNumberish,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "votingPower"): TypedContractMethod<[account: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "winnerName"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "winningProposal"): TypedContractMethod<[], [bigint], "view">;
    filters: {};
}
