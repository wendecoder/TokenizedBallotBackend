import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../common";
export interface IERC6372Interface extends Interface {
    getFunction(nameOrSignature: "CLOCK_MODE" | "clock"): FunctionFragment;
    encodeFunctionData(functionFragment: "CLOCK_MODE", values?: undefined): string;
    encodeFunctionData(functionFragment: "clock", values?: undefined): string;
    decodeFunctionResult(functionFragment: "CLOCK_MODE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "clock", data: BytesLike): Result;
}
export interface IERC6372 extends BaseContract {
    connect(runner?: ContractRunner | null): IERC6372;
    waitForDeployment(): Promise<this>;
    interface: IERC6372Interface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    CLOCK_MODE: TypedContractMethod<[], [string], "view">;
    clock: TypedContractMethod<[], [bigint], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "CLOCK_MODE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "clock"): TypedContractMethod<[], [bigint], "view">;
    filters: {};
}
