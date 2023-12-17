"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IERC6372__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "CLOCK_MODE",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "clock",
        outputs: [
            {
                internalType: "uint48",
                name: "",
                type: "uint48",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
class IERC6372__factory {
    static createInterface() {
        return new ethers_1.Interface(_abi);
    }
    static connect(address, runner) {
        return new ethers_1.Contract(address, _abi, runner);
    }
}
exports.IERC6372__factory = IERC6372__factory;
IERC6372__factory.abi = _abi;
//# sourceMappingURL=IERC6372__factory.js.map