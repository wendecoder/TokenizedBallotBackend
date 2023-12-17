"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenizedBallot__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes32[]",
                name: "proposalNames",
                type: "bytes32[]",
            },
            {
                internalType: "contract IMyToken",
                name: "_targetContract",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_targetBlockNumber",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "VOTING_POWER_CALLER_ROLE",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "proposals",
        outputs: [
            {
                internalType: "bytes32",
                name: "name",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "voteCount",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "remainingVotingPower",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "targetBlockNumber",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "targetContract",
        outputs: [
            {
                internalType: "contract IMyToken",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "proposal",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "vote",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "votingPower",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "winnerName",
        outputs: [
            {
                internalType: "bytes32",
                name: "winnerName_",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "winningProposal",
        outputs: [
            {
                internalType: "uint256",
                name: "winningProposal_",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b5060405162000f9b38038062000f9b8339818101604052810190620000379190620003de565b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806002819055504360025410620000c5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000bc90620004e0565b60405180910390fd5b60005b83518110156200015c5760016040518060400160405280868481518110620000f557620000f462000502565b5b6020026020010151815260200160008152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550508080620001539062000560565b915050620000c8565b50505050620005ad565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620001ca826200017f565b810181811067ffffffffffffffff82111715620001ec57620001eb62000190565b5b80604052505050565b60006200020162000166565b90506200020f8282620001bf565b919050565b600067ffffffffffffffff82111562000232576200023162000190565b5b602082029050602081019050919050565b600080fd5b6000819050919050565b6200025d8162000248565b81146200026957600080fd5b50565b6000815190506200027d8162000252565b92915050565b60006200029a620002948462000214565b620001f5565b90508083825260208201905060208402830185811115620002c057620002bf62000243565b5b835b81811015620002ed5780620002d888826200026c565b845260208401935050602081019050620002c2565b5050509392505050565b600082601f8301126200030f576200030e6200017a565b5b81516200032184826020860162000283565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062000357826200032a565b9050919050565b60006200036b826200034a565b9050919050565b6200037d816200035e565b81146200038957600080fd5b50565b6000815190506200039d8162000372565b92915050565b6000819050919050565b620003b881620003a3565b8114620003c457600080fd5b50565b600081519050620003d881620003ad565b92915050565b600080600060608486031215620003fa57620003f962000170565b5b600084015167ffffffffffffffff8111156200041b576200041a62000175565b5b6200042986828701620002f7565b93505060206200043c868287016200038c565b92505060406200044f86828701620003c7565b9150509250925092565b600082825260208201905092915050565b7f546f6b656e697a656442616c6c6f743a20746172676574426c6f636b4e756d6260008201527f6572206d75737420626520696e20746865207061737400000000000000000000602082015250565b6000620004c860368362000459565b9150620004d5826200046a565b604082019050919050565b60006020820190508181036000830152620004fb81620004b9565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006200056d82620003a3565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203620005a257620005a162000531565b5b600182019050919050565b6109de80620005bd6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063b384abef11610066578063b384abef14610135578063bd90df7014610151578063c07473f61461016f578063e2ba53f01461019f578063eb8adbd2146101bd57610093565b8063013cf08b146100985780632a8cd29e146100c95780635814bfbc146100e7578063609ff1bd14610117575b600080fd5b6100b260048036038101906100ad9190610584565b6101db565b6040516100c09291906105d9565b60405180910390f35b6100d161020f565b6040516100de9190610602565b60405180910390f35b61010160048036038101906100fc919061067b565b610215565b60405161010e9190610602565b60405180910390f35b61011f61022d565b60405161012c9190610602565b60405180910390f35b61014f600480360381019061014a91906106a8565b6102b5565b005b610159610397565b6040516101669190610747565b60405180910390f35b6101896004803603810190610184919061067b565b6103bb565b6040516101969190610602565b60405180910390f35b6101a76104f1565b6040516101b49190610762565b60405180910390f35b6101c5610525565b6040516101d29190610762565b60405180910390f35b600181815481106101eb57600080fd5b90600052602060002090600202016000915090508060000154908060010154905082565b60025481565b60036020528060005260406000206000915090505481565b6000806000905060005b6001805490508110156102b05781600182815481106102595761025861077d565b5b906000526020600020906002020160010154111561029d57600181815481106102855761028461077d565b5b90600052602060002090600202016001015491508092505b80806102a8906107db565b915050610237565b505090565b806102bf336103bb565b1015610300576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102f7906108a6565b60405180910390fd5b8061030a336103bb565b61031491906108c6565b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550806001838154811061036c5761036b61077d565b5b9060005260206000209060020201600101600082825461038c91906108fa565b925050819055505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054111561044b57600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506104ec565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633a46b1a8836002546040518363ffffffff1660e01b81526004016104a892919061093d565b602060405180830381865afa1580156104c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e9919061097b565b90505b919050565b600060016104fd61022d565b8154811061050e5761050d61077d565b5b906000526020600020906002020160000154905090565b7fe757def01a0a376dbea577936d8a3d9487b3d24b6d844494218fc6316b2dcb2481565b600080fd5b6000819050919050565b6105618161054e565b811461056c57600080fd5b50565b60008135905061057e81610558565b92915050565b60006020828403121561059a57610599610549565b5b60006105a88482850161056f565b91505092915050565b6000819050919050565b6105c4816105b1565b82525050565b6105d38161054e565b82525050565b60006040820190506105ee60008301856105bb565b6105fb60208301846105ca565b9392505050565b600060208201905061061760008301846105ca565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006106488261061d565b9050919050565b6106588161063d565b811461066357600080fd5b50565b6000813590506106758161064f565b92915050565b60006020828403121561069157610690610549565b5b600061069f84828501610666565b91505092915050565b600080604083850312156106bf576106be610549565b5b60006106cd8582860161056f565b92505060206106de8582860161056f565b9150509250929050565b6000819050919050565b600061070d6107086107038461061d565b6106e8565b61061d565b9050919050565b600061071f826106f2565b9050919050565b600061073182610714565b9050919050565b61074181610726565b82525050565b600060208201905061075c6000830184610738565b92915050565b600060208201905061077760008301846105bb565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006107e68261054e565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610818576108176107ac565b5b600182019050919050565b600082825260208201905092915050565b7f546f6b656e697a656442616c6c6f743a20747279696e6720746f20766f74652060008201527f6d6f7265207468616e20616c6c6f776564000000000000000000000000000000602082015250565b6000610890603183610823565b915061089b82610834565b604082019050919050565b600060208201905081810360008301526108bf81610883565b9050919050565b60006108d18261054e565b91506108dc8361054e565b92508282039050818111156108f4576108f36107ac565b5b92915050565b60006109058261054e565b91506109108361054e565b9250828201905080821115610928576109276107ac565b5b92915050565b6109378161063d565b82525050565b6000604082019050610952600083018561092e565b61095f60208301846105ca565b9392505050565b60008151905061097581610558565b92915050565b60006020828403121561099157610990610549565b5b600061099f84828501610966565b9150509291505056fea2646970667358221220a1f053419bffe55d7ef784c48b84616ba1a200136c461ede1632460d1402309864736f6c63430008130033";
const isSuperArgs = (xs) => xs.length > 1;
class TokenizedBallot__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    getDeployTransaction(proposalNames, _targetContract, _targetBlockNumber, overrides) {
        return super.getDeployTransaction(proposalNames, _targetContract, _targetBlockNumber, overrides || {});
    }
    deploy(proposalNames, _targetContract, _targetBlockNumber, overrides) {
        return super.deploy(proposalNames, _targetContract, _targetBlockNumber, overrides || {});
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
exports.TokenizedBallot__factory = TokenizedBallot__factory;
TokenizedBallot__factory.bytecode = _bytecode;
TokenizedBallot__factory.abi = _abi;
//# sourceMappingURL=TokenizedBallot__factory.js.map