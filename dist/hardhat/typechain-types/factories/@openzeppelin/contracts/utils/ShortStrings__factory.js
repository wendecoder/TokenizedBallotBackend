"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortStrings__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "InvalidShortString",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "str",
                type: "string",
            },
        ],
        name: "StringTooLong",
        type: "error",
    },
];
const _bytecode = "0x60566050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212207b070ef87ce2a8f6655559d6f80d60474a249a271498b7f3a2015ffd3f9e066a64736f6c63430008130033";
const isSuperArgs = (xs) => xs.length > 1;
class ShortStrings__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    connect(runner) {
        return super.connect(runner);
    }
    static createInterface() {
        return new ethers_1.Interface(_abi);
    }
    static connect(address, runner) {
        return new ethers_1.Contract(address, _abi, runner);
    }
}
exports.ShortStrings__factory = ShortStrings__factory;
ShortStrings__factory.bytecode = _bytecode;
ShortStrings__factory.abi = _abi;
//# sourceMappingURL=ShortStrings__factory.js.map