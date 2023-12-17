"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyToken__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
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
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "delegator",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "fromDelegate",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "toDelegate",
                type: "address",
            },
        ],
        name: "DelegateChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "delegate",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "previousBalance",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newBalance",
                type: "uint256",
            },
        ],
        name: "DelegateVotesChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [],
        name: "EIP712DomainChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "previousAdminRole",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "newAdminRole",
                type: "bytes32",
            },
        ],
        name: "RoleAdminChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "RoleGranted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "RoleRevoked",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
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
        name: "DEFAULT_ADMIN_ROLE",
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
        inputs: [],
        name: "DOMAIN_SEPARATOR",
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
        inputs: [],
        name: "MINTER_ROLE",
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
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
        ],
        name: "allowance",
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
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
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
        name: "balanceOf",
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
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "uint32",
                name: "pos",
                type: "uint32",
            },
        ],
        name: "checkpoints",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint32",
                        name: "fromBlock",
                        type: "uint32",
                    },
                    {
                        internalType: "uint224",
                        name: "votes",
                        type: "uint224",
                    },
                ],
                internalType: "struct ERC20Votes.Checkpoint",
                name: "",
                type: "tuple",
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
    {
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
            },
        ],
        name: "decreaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "delegatee",
                type: "address",
            },
        ],
        name: "delegate",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "delegatee",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "nonce",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "expiry",
                type: "uint256",
            },
            {
                internalType: "uint8",
                name: "v",
                type: "uint8",
            },
            {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
            },
        ],
        name: "delegateBySig",
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
        name: "delegates",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "eip712Domain",
        outputs: [
            {
                internalType: "bytes1",
                name: "fields",
                type: "bytes1",
            },
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "string",
                name: "version",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "verifyingContract",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "salt",
                type: "bytes32",
            },
            {
                internalType: "uint256[]",
                name: "extensions",
                type: "uint256[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "timepoint",
                type: "uint256",
            },
        ],
        name: "getPastTotalSupply",
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
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "timepoint",
                type: "uint256",
            },
        ],
        name: "getPastVotes",
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
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
        ],
        name: "getRoleAdmin",
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
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "getVotes",
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
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "grantRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "hasRole",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256",
            },
        ],
        name: "increaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
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
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "nonces",
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
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "numCheckpoints",
        outputs: [
            {
                internalType: "uint32",
                name: "",
                type: "uint32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
            {
                internalType: "uint8",
                name: "v",
                type: "uint8",
            },
            {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
            },
        ],
        name: "permit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "renounceRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "revokeRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
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
        name: "totalSupply",
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
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x6101606040523480156200001257600080fd5b506040518060400160405280600781526020017f4d79546f6b656e00000000000000000000000000000000000000000000000000815250806040518060400160405280600181526020017f31000000000000000000000000000000000000000000000000000000000000008152506040518060400160405280600781526020017f4d79546f6b656e000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f4d544b00000000000000000000000000000000000000000000000000000000008152508160039081620000fd91906200071b565b5080600490816200010f91906200071b565b505050620001286006836200021060201b90919060201c565b6101208181525050620001466007826200021060201b90919060201c565b6101408181525050818051906020012060e08181525050808051906020012061010081815250504660a08181525050620001856200026860201b60201c565b608081815250503073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff1681525050505050620001d86000801b33620002c560201b60201c565b6200020a7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633620002c560201b60201c565b62000a25565b600060208351101562000236576200022e83620003b760201b60201c565b905062000262565b8262000248836200042460201b60201c565b60000190816200025991906200071b565b5060ff60001b90505b92915050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60e051610100514630604051602001620002aa95949392919062000873565b60405160208183030381529060405280519060200120905090565b620002d782826200042e60201b60201c565b620003b35760016005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550620003586200049960201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b600080829050601f815111156200040757826040517f305a27a9000000000000000000000000000000000000000000000000000000008152600401620003fe91906200095f565b60405180910390fd5b8051816200041590620009b5565b60001c1760001b915050919050565b6000819050919050565b60006005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600033905090565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200052357607f821691505b602082108103620005395762000538620004db565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620005a37fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000564565b620005af868362000564565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620005fc620005f6620005f084620005c7565b620005d1565b620005c7565b9050919050565b6000819050919050565b6200061883620005db565b62000630620006278262000603565b84845462000571565b825550505050565b600090565b6200064762000638565b620006548184846200060d565b505050565b5b818110156200067c57620006706000826200063d565b6001810190506200065a565b5050565b601f821115620006cb5762000695816200053f565b620006a08462000554565b81016020851015620006b0578190505b620006c8620006bf8562000554565b83018262000659565b50505b505050565b600082821c905092915050565b6000620006f060001984600802620006d0565b1980831691505092915050565b60006200070b8383620006dd565b9150826002028217905092915050565b6200072682620004a1565b67ffffffffffffffff811115620007425762000741620004ac565b5b6200074e82546200050a565b6200075b82828562000680565b600060209050601f8311600181146200079357600084156200077e578287015190505b6200078a8582620006fd565b865550620007fa565b601f198416620007a3866200053f565b60005b82811015620007cd57848901518255600182019150602085019450602081019050620007a6565b86831015620007ed5784890151620007e9601f891682620006dd565b8355505b6001600288020188555050505b505050505050565b6000819050919050565b620008178162000802565b82525050565b6200082881620005c7565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200085b826200082e565b9050919050565b6200086d816200084e565b82525050565b600060a0820190506200088a60008301886200080c565b6200089960208301876200080c565b620008a860408301866200080c565b620008b760608301856200081d565b620008c6608083018462000862565b9695505050505050565b600082825260208201905092915050565b60005b8381101562000901578082015181840152602081019050620008e4565b60008484015250505050565b6000601f19601f8301169050919050565b60006200092b82620004a1565b620009378185620008d0565b935062000949818560208601620008e1565b62000954816200090d565b840191505092915050565b600060208201905081810360008301526200097b81846200091e565b905092915050565b600081519050919050565b6000819050602082019050919050565b6000620009ac825162000802565b80915050919050565b6000620009c28262000983565b82620009ce846200098e565b9050620009db816200099e565b9250602082101562000a1e5762000a197fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8360200360080262000564565b831692505b5050919050565b60805160a05160c05160e051610100516101205161014051614b5762000a806000396000610cc601526000610c92015260006121e2015260006121c101526000611af401526000611b4a01526000611b730152614b576000f3fe608060405234801561001057600080fd5b50600436106102065760003560e01c806370a082311161011a578063a217fddf116100ad578063d505accf1161007c578063d505accf1461067b578063d539139314610697578063d547741f146106b5578063dd62ed3e146106d1578063f1127ed81461070157610206565b8063a217fddf146105e1578063a457c2d7146105ff578063a9059cbb1461062f578063c3cda5201461065f57610206565b806391d14854116100e957806391d148541461054557806391ddadf41461057557806395d89b41146105935780639ab24eb0146105b157610206565b806370a08231146104915780637ecebe00146104c157806384b0196e146104f15780638e539e8c1461051557610206565b80633644e5151161019d57806340c10f191161016c57806340c10f19146103db5780634bf5d7e9146103f7578063587cde1e146104155780635c19a95c146104455780636fcfff451461046157610206565b80633644e5151461034157806336568abe1461035f578063395093511461037b5780633a46b1a8146103ab57610206565b806323b872dd116101d957806323b872dd146102a7578063248a9ca3146102d75780632f2ff15d14610307578063313ce5671461032357610206565b806301ffc9a71461020b57806306fdde031461023b578063095ea7b31461025957806318160ddd14610289575b600080fd5b61022560048036038101906102209190613269565b610731565b60405161023291906132b1565b60405180910390f35b6102436107ab565b604051610250919061335c565b60405180910390f35b610273600480360381019061026e9190613412565b61083d565b60405161028091906132b1565b60405180910390f35b610291610860565b60405161029e9190613461565b60405180910390f35b6102c160048036038101906102bc919061347c565b61086a565b6040516102ce91906132b1565b60405180910390f35b6102f160048036038101906102ec9190613505565b610899565b6040516102fe9190613541565b60405180910390f35b610321600480360381019061031c919061355c565b6108b9565b005b61032b6108da565b60405161033891906135b8565b60405180910390f35b6103496108e3565b6040516103569190613541565b60405180910390f35b6103796004803603810190610374919061355c565b6108f2565b005b61039560048036038101906103909190613412565b610975565b6040516103a291906132b1565b60405180910390f35b6103c560048036038101906103c09190613412565b6109ac565b6040516103d29190613461565b60405180910390f35b6103f560048036038101906103f09190613412565b610a4f565b005b6103ff610a88565b60405161040c919061335c565b60405180910390f35b61042f600480360381019061042a91906135d3565b610b16565b60405161043c919061360f565b60405180910390f35b61045f600480360381019061045a91906135d3565b610b7f565b005b61047b600480360381019061047691906135d3565b610b93565b6040516104889190613649565b60405180910390f35b6104ab60048036038101906104a691906135d3565b610be7565b6040516104b89190613461565b60405180910390f35b6104db60048036038101906104d691906135d3565b610c2f565b6040516104e89190613461565b60405180910390f35b6104f9610c7f565b60405161050c979695949392919061375d565b60405180910390f35b61052f600480360381019061052a91906137e1565b610d81565b60405161053c9190613461565b60405180910390f35b61055f600480360381019061055a919061355c565b610de6565b60405161056c91906132b1565b60405180910390f35b61057d610e51565b60405161058a919061382f565b60405180910390f35b61059b610e61565b6040516105a8919061335c565b60405180910390f35b6105cb60048036038101906105c691906135d3565b610ef3565b6040516105d89190613461565b60405180910390f35b6105e9610ffb565b6040516105f69190613541565b60405180910390f35b61061960048036038101906106149190613412565b611002565b60405161062691906132b1565b60405180910390f35b61064960048036038101906106449190613412565b611079565b60405161065691906132b1565b60405180910390f35b61067960048036038101906106749190613876565b61109c565b005b61069560048036038101906106909190613903565b6111a0565b005b61069f6112e2565b6040516106ac9190613541565b60405180910390f35b6106cf60048036038101906106ca919061355c565b611306565b005b6106eb60048036038101906106e691906139a5565b611327565b6040516106f89190613461565b60405180910390f35b61071b60048036038101906107169190613a11565b6113ae565b6040516107289190613ac6565b60405180910390f35b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806107a457506107a3826114be565b5b9050919050565b6060600380546107ba90613b10565b80601f01602080910402602001604051908101604052809291908181526020018280546107e690613b10565b80156108335780601f1061080857610100808354040283529160200191610833565b820191906000526020600020905b81548152906001019060200180831161081657829003601f168201915b5050505050905090565b600080610848611528565b9050610855818585611530565b600191505092915050565b6000600254905090565b600080610875611528565b90506108828582856116f9565b61088d858585611785565b60019150509392505050565b600060056000838152602001908152602001600020600101549050919050565b6108c282610899565b6108cb816119fb565b6108d58383611a0f565b505050565b60006012905090565b60006108ed611af0565b905090565b6108fa611528565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610967576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095e90613bb3565b60405180910390fd5b6109718282611ba7565b5050565b600080610980611528565b90506109a18185856109928589611327565b61099c9190613c02565b611530565b600191505092915050565b60006109b6610e51565b65ffffffffffff1682106109ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109f690613c82565b60405180910390fd5b610a47600b60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002083611c89565b905092915050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6610a79816119fb565b610a838383611dd1565b505050565b606043610a93610e51565b65ffffffffffff1614610adb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ad290613cee565b60405180910390fd5b6040518060400160405280601d81526020017f6d6f64653d626c6f636b6e756d6265722666726f6d3d64656661756c74000000815250905090565b6000600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b610b90610b8a611528565b82611ddf565b50565b6000610be0600b60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050611ef9565b9050919050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000610c78600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611f4c565b9050919050565b600060608060008060006060610cbf60067f0000000000000000000000000000000000000000000000000000000000000000611f5a90919063ffffffff16565b610cf360077f0000000000000000000000000000000000000000000000000000000000000000611f5a90919063ffffffff16565b46306000801b600067ffffffffffffffff811115610d1457610d13613d0e565b5b604051908082528060200260200182016040528015610d425781602001602082028036833780820191505090505b507f0f00000000000000000000000000000000000000000000000000000000000000959493929190965096509650965096509650965090919293949596565b6000610d8b610e51565b65ffffffffffff168210610dd4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dcb90613c82565b60405180910390fd5b610ddf600c83611c89565b9050919050565b60006005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000610e5c4361200a565b905090565b606060048054610e7090613b10565b80601f0160208091040260200160405190810160405280929190818152602001828054610e9c90613b10565b8015610ee95780601f10610ebe57610100808354040283529160200191610ee9565b820191906000526020600020905b815481529060010190602001808311610ecc57829003601f168201915b5050505050905090565b600080600b60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050905060008114610fd257600b60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001820381548110610f9757610f96613d3d565b5b9060005260206000200160000160049054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16610fd5565b60005b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16915050919050565b6000801b81565b60008061100d611528565b9050600061101b8286611327565b905083811015611060576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161105790613dde565b60405180910390fd5b61106d8286868403611530565b60019250505092915050565b600080611084611528565b9050611091818585611785565b600191505092915050565b834211156110df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110d690613e4a565b60405180910390fd5b60006111416111397fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf89898960405160200161111e9493929190613e6a565b6040516020818303038152906040528051906020012061205f565b858585612079565b905061114c816120a4565b861461118d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161118490613efb565b60405180910390fd5b6111978188611ddf565b50505050505050565b834211156111e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111da90613f67565b60405180910390fd5b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886112128c6120a4565b8960405160200161122896959493929190613f87565b604051602081830303815290604052805190602001209050600061124b8261205f565b9050600061125b82878787612079565b90508973ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146112cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112c290614034565b60405180910390fd5b6112d68a8a8a611530565b50505050505050505050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b61130f82610899565b611318816119fb565b6113228383611ba7565b505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6113b66131ce565b600b60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208263ffffffff168154811061140d5761140c613d3d565b5b906000526020600020016040518060400160405290816000820160009054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016000820160049054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1681525050905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361159f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611596906140c6565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361160e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161160590614158565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516116ec9190613461565b60405180910390a3505050565b60006117058484611327565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461177f5781811015611771576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611768906141c4565b60405180910390fd5b61177e8484848403611530565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036117f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117eb90614256565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611863576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161185a906142e8565b60405180910390fd5b61186e838383612102565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156118f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118eb9061437a565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516119e29190613461565b60405180910390a36119f5848484612107565b50505050565b611a0c81611a07611528565b612117565b50565b611a198282610de6565b611aec5760016005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550611a91611528565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16148015611b6c57507f000000000000000000000000000000000000000000000000000000000000000046145b15611b99577f00000000000000000000000000000000000000000000000000000000000000009050611ba4565b611ba161219c565b90505b90565b611bb18282610de6565b15611c855760006005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550611c2a611528565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b600080838054905090506000808290506005831115611cff576000611cad84612232565b84611cb8919061439a565b905085611cc5888361232b565b60000160009054906101000a900463ffffffff1663ffffffff161115611ced57809150611cfd565b600181611cfa9190613c02565b92505b505b5b80821015611d5f576000611d148383612340565b905085611d21888361232b565b60000160009054906101000a900463ffffffff1663ffffffff161115611d4957809150611d59565b600181611d569190613c02565b92505b50611d00565b60008114611da557611d74866001830361232b565b60000160049054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16611da8565b60005b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16935050505092915050565b611ddb8282612366565b5050565b6000611dea83610b16565b90506000611df784610be7565b905082600a60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f60405160405180910390a4611ef38284836123f3565b50505050565b600063ffffffff8016821115611f44576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f3b90614440565b60405180910390fd5b819050919050565b600081600001549050919050565b606060ff60001b8314611f7757611f70836125ec565b9050612004565b818054611f8390613b10565b80601f0160208091040260200160405190810160405280929190818152602001828054611faf90613b10565b8015611ffc5780601f10611fd157610100808354040283529160200191611ffc565b820191906000526020600020905b815481529060010190602001808311611fdf57829003601f168201915b505050505090505b92915050565b600065ffffffffffff8016821115612057576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161204e906144d2565b60405180910390fd5b819050919050565b600061207261206c611af0565b83612660565b9050919050565b600080600061208a878787876126a1565b9150915061209781612783565b8192505050949350505050565b600080600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506120f181611f4c565b91506120fc816128e9565b50919050565b505050565b6121128383836128ff565b505050565b6121218282610de6565b6121985761212e8161292a565b61213c8360001c6020612957565b60405160200161214d9291906145c6565b6040516020818303038152906040526040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161218f919061335c565b60405180910390fd5b5050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000004630604051602001612217959493929190614600565b60405160208183030381529060405280519060200120905090565b60008082036122445760009050612326565b6000600161225184612b93565b901c6001901b9050600181848161226b5761226a614653565b5b048201901c9050600181848161228457612283614653565b5b048201901c9050600181848161229d5761229c614653565b5b048201901c905060018184816122b6576122b5614653565b5b048201901c905060018184816122cf576122ce614653565b5b048201901c905060018184816122e8576122e7614653565b5b048201901c9050600181848161230157612300614653565b5b048201901c90506123228182858161231c5761231b614653565b5b04612c74565b9150505b919050565b60008260005281602060002001905092915050565b600060028284186123519190614682565b82841661235e9190613c02565b905092915050565b6123708282612c8d565b612378612de3565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1661239e610860565b11156123df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016123d690614725565b60405180910390fd5b6123ed600c612e0783612e1d565b50505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561242f5750600081115b156125e757600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461250d576000806124b6600b60008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206130f885612e1d565b915091508473ffffffffffffffffffffffffffffffffffffffff167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051612502929190614745565b60405180910390a250505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16146125e65760008061258f600b60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612e0785612e1d565b915091508373ffffffffffffffffffffffffffffffffffffffff167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a72483836040516125db929190614745565b60405180910390a250505b5b505050565b606060006125f98361310e565b90506000602067ffffffffffffffff81111561261857612617613d0e565b5b6040519080825280601f01601f19166020018201604052801561264a5781602001600182028036833780820191505090505b5090508181528360208201528092505050919050565b60006040517f190100000000000000000000000000000000000000000000000000000000000081528360028201528260228201526042812091505092915050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c11156126dc57600060039150915061277a565b600060018787878760405160008152602001604052604051612701949392919061476e565b6020604051602081039080840390855afa158015612723573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036127715760006001925092505061277a565b80600092509250505b94509492505050565b60006004811115612797576127966147b3565b5b8160048111156127aa576127a96147b3565b5b03156128e657600160048111156127c4576127c36147b3565b5b8160048111156127d7576127d66147b3565b5b03612817576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161280e9061482e565b60405180910390fd5b6002600481111561282b5761282a6147b3565b5b81600481111561283e5761283d6147b3565b5b0361287e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016128759061489a565b60405180910390fd5b60036004811115612892576128916147b3565b5b8160048111156128a5576128a46147b3565b5b036128e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016128dc9061492c565b60405180910390fd5b5b50565b6001816000016000828254019250508190555050565b61290a83838361315e565b61292561291684610b16565b61291f84610b16565b836123f3565b505050565b60606129508273ffffffffffffffffffffffffffffffffffffffff16601460ff16612957565b9050919050565b60606000600283600261296a919061494c565b6129749190613c02565b67ffffffffffffffff81111561298d5761298c613d0e565b5b6040519080825280601f01601f1916602001820160405280156129bf5781602001600182028036833780820191505090505b5090507f3000000000000000000000000000000000000000000000000000000000000000816000815181106129f7576129f6613d3d565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110612a5b57612a5a613d3d565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060006001846002612a9b919061494c565b612aa59190613c02565b90505b6001811115612b45577f3031323334353637383961626364656600000000000000000000000000000000600f861660108110612ae757612ae6613d3d565b5b1a60f81b828281518110612afe57612afd613d3d565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c945080612b3e9061498e565b9050612aa8565b5060008414612b89576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612b8090614a03565b60405180910390fd5b8091505092915050565b600080600090506000608084901c1115612bb557608083901c92506080810190505b6000604084901c1115612bd057604083901c92506040810190505b6000602084901c1115612beb57602083901c92506020810190505b6000601084901c1115612c0657601083901c92506010810190505b6000600884901c1115612c2157600883901c92506008810190505b6000600484901c1115612c3c57600483901c92506004810190505b6000600284901c1115612c5757600283901c92506002810190505b6000600184901c1115612c6b576001810190505b80915050919050565b6000818310612c835781612c85565b825b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612cfc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612cf390614a6f565b60405180910390fd5b612d0860008383612102565b8060026000828254612d1a9190613c02565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051612dcb9190613461565b60405180910390a3612ddf60008383612107565b5050565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff905090565b60008183612e159190613c02565b905092915050565b6000806000858054905090506000808214612ee357612e3f876001840361232b565b6040518060400160405290816000820160009054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016000820160049054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1681525050612f1f565b6040518060400160405280600063ffffffff16815260200160007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff168152505b905080602001517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff169350612f5484868863ffffffff16565b9250600082118015612f7e5750612f69610e51565b65ffffffffffff16816000015163ffffffff16145b15612fef57612f8c83613163565b612f99886001850361232b565b60000160046101000a8154817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1602179055506130ee565b866040518060400160405280613013613006610e51565b65ffffffffffff16611ef9565b63ffffffff16815260200161302786613163565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff168152509080600181540180825580915050600190039060005260206000200160009091909190915060008201518160000160006101000a81548163ffffffff021916908363ffffffff16021790555060208201518160000160046101000a8154817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16021790555050505b5050935093915050565b60008183613106919061439a565b905092915050565b60008060ff8360001c169050601f811115613155576040517fb3512b0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80915050919050565b505050565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff80168211156131c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016131bd90614b01565b60405180910390fd5b819050919050565b6040518060400160405280600063ffffffff16815260200160007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1681525090565b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61324681613211565b811461325157600080fd5b50565b6000813590506132638161323d565b92915050565b60006020828403121561327f5761327e61320c565b5b600061328d84828501613254565b91505092915050565b60008115159050919050565b6132ab81613296565b82525050565b60006020820190506132c660008301846132a2565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156133065780820151818401526020810190506132eb565b60008484015250505050565b6000601f19601f8301169050919050565b600061332e826132cc565b61333881856132d7565b93506133488185602086016132e8565b61335181613312565b840191505092915050565b600060208201905081810360008301526133768184613323565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006133a98261337e565b9050919050565b6133b98161339e565b81146133c457600080fd5b50565b6000813590506133d6816133b0565b92915050565b6000819050919050565b6133ef816133dc565b81146133fa57600080fd5b50565b60008135905061340c816133e6565b92915050565b600080604083850312156134295761342861320c565b5b6000613437858286016133c7565b9250506020613448858286016133fd565b9150509250929050565b61345b816133dc565b82525050565b60006020820190506134766000830184613452565b92915050565b6000806000606084860312156134955761349461320c565b5b60006134a3868287016133c7565b93505060206134b4868287016133c7565b92505060406134c5868287016133fd565b9150509250925092565b6000819050919050565b6134e2816134cf565b81146134ed57600080fd5b50565b6000813590506134ff816134d9565b92915050565b60006020828403121561351b5761351a61320c565b5b6000613529848285016134f0565b91505092915050565b61353b816134cf565b82525050565b60006020820190506135566000830184613532565b92915050565b600080604083850312156135735761357261320c565b5b6000613581858286016134f0565b9250506020613592858286016133c7565b9150509250929050565b600060ff82169050919050565b6135b28161359c565b82525050565b60006020820190506135cd60008301846135a9565b92915050565b6000602082840312156135e9576135e861320c565b5b60006135f7848285016133c7565b91505092915050565b6136098161339e565b82525050565b60006020820190506136246000830184613600565b92915050565b600063ffffffff82169050919050565b6136438161362a565b82525050565b600060208201905061365e600083018461363a565b92915050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b61369981613664565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6136d4816133dc565b82525050565b60006136e683836136cb565b60208301905092915050565b6000602082019050919050565b600061370a8261369f565b61371481856136aa565b935061371f836136bb565b8060005b8381101561375057815161373788826136da565b9750613742836136f2565b925050600181019050613723565b5085935050505092915050565b600060e082019050613772600083018a613690565b81810360208301526137848189613323565b905081810360408301526137988188613323565b90506137a76060830187613452565b6137b46080830186613600565b6137c160a0830185613532565b81810360c08301526137d381846136ff565b905098975050505050505050565b6000602082840312156137f7576137f661320c565b5b6000613805848285016133fd565b91505092915050565b600065ffffffffffff82169050919050565b6138298161380e565b82525050565b60006020820190506138446000830184613820565b92915050565b6138538161359c565b811461385e57600080fd5b50565b6000813590506138708161384a565b92915050565b60008060008060008060c087890312156138935761389261320c565b5b60006138a189828a016133c7565b96505060206138b289828a016133fd565b95505060406138c389828a016133fd565b94505060606138d489828a01613861565b93505060806138e589828a016134f0565b92505060a06138f689828a016134f0565b9150509295509295509295565b600080600080600080600060e0888a0312156139225761392161320c565b5b60006139308a828b016133c7565b97505060206139418a828b016133c7565b96505060406139528a828b016133fd565b95505060606139638a828b016133fd565b94505060806139748a828b01613861565b93505060a06139858a828b016134f0565b92505060c06139968a828b016134f0565b91505092959891949750929550565b600080604083850312156139bc576139bb61320c565b5b60006139ca858286016133c7565b92505060206139db858286016133c7565b9150509250929050565b6139ee8161362a565b81146139f957600080fd5b50565b600081359050613a0b816139e5565b92915050565b60008060408385031215613a2857613a2761320c565b5b6000613a36858286016133c7565b9250506020613a47858286016139fc565b9150509250929050565b613a5a8161362a565b82525050565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff82169050919050565b613a9181613a60565b82525050565b604082016000820151613aad6000850182613a51565b506020820151613ac06020850182613a88565b50505050565b6000604082019050613adb6000830184613a97565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680613b2857607f821691505b602082108103613b3b57613b3a613ae1565b5b50919050565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b6000613b9d602f836132d7565b9150613ba882613b41565b604082019050919050565b60006020820190508181036000830152613bcc81613b90565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000613c0d826133dc565b9150613c18836133dc565b9250828201905080821115613c3057613c2f613bd3565b5b92915050565b7f4552433230566f7465733a20667574757265206c6f6f6b757000000000000000600082015250565b6000613c6c6019836132d7565b9150613c7782613c36565b602082019050919050565b60006020820190508181036000830152613c9b81613c5f565b9050919050565b7f4552433230566f7465733a2062726f6b656e20636c6f636b206d6f6465000000600082015250565b6000613cd8601d836132d7565b9150613ce382613ca2565b602082019050919050565b60006020820190508181036000830152613d0781613ccb565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000613dc86025836132d7565b9150613dd382613d6c565b604082019050919050565b60006020820190508181036000830152613df781613dbb565b9050919050565b7f4552433230566f7465733a207369676e61747572652065787069726564000000600082015250565b6000613e34601d836132d7565b9150613e3f82613dfe565b602082019050919050565b60006020820190508181036000830152613e6381613e27565b9050919050565b6000608082019050613e7f6000830187613532565b613e8c6020830186613600565b613e996040830185613452565b613ea66060830184613452565b95945050505050565b7f4552433230566f7465733a20696e76616c6964206e6f6e636500000000000000600082015250565b6000613ee56019836132d7565b9150613ef082613eaf565b602082019050919050565b60006020820190508181036000830152613f1481613ed8565b9050919050565b7f45524332305065726d69743a206578706972656420646561646c696e65000000600082015250565b6000613f51601d836132d7565b9150613f5c82613f1b565b602082019050919050565b60006020820190508181036000830152613f8081613f44565b9050919050565b600060c082019050613f9c6000830189613532565b613fa96020830188613600565b613fb66040830187613600565b613fc36060830186613452565b613fd06080830185613452565b613fdd60a0830184613452565b979650505050505050565b7f45524332305065726d69743a20696e76616c6964207369676e61747572650000600082015250565b600061401e601e836132d7565b915061402982613fe8565b602082019050919050565b6000602082019050818103600083015261404d81614011565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006140b06024836132d7565b91506140bb82614054565b604082019050919050565b600060208201905081810360008301526140df816140a3565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b60006141426022836132d7565b915061414d826140e6565b604082019050919050565b6000602082019050818103600083015261417181614135565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b60006141ae601d836132d7565b91506141b982614178565b602082019050919050565b600060208201905081810360008301526141dd816141a1565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006142406025836132d7565b915061424b826141e4565b604082019050919050565b6000602082019050818103600083015261426f81614233565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006142d26023836132d7565b91506142dd82614276565b604082019050919050565b60006020820190508181036000830152614301816142c5565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006143646026836132d7565b915061436f82614308565b604082019050919050565b6000602082019050818103600083015261439381614357565b9050919050565b60006143a5826133dc565b91506143b0836133dc565b92508282039050818111156143c8576143c7613bd3565b5b92915050565b7f53616665436173743a2076616c756520646f65736e27742066697420696e203360008201527f3220626974730000000000000000000000000000000000000000000000000000602082015250565b600061442a6026836132d7565b9150614435826143ce565b604082019050919050565b600060208201905081810360008301526144598161441d565b9050919050565b7f53616665436173743a2076616c756520646f65736e27742066697420696e203460008201527f3820626974730000000000000000000000000000000000000000000000000000602082015250565b60006144bc6026836132d7565b91506144c782614460565b604082019050919050565b600060208201905081810360008301526144eb816144af565b9050919050565b600081905092915050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b60006145336017836144f2565b915061453e826144fd565b601782019050919050565b6000614554826132cc565b61455e81856144f2565b935061456e8185602086016132e8565b80840191505092915050565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b60006145b06011836144f2565b91506145bb8261457a565b601182019050919050565b60006145d182614526565b91506145dd8285614549565b91506145e8826145a3565b91506145f48284614549565b91508190509392505050565b600060a0820190506146156000830188613532565b6146226020830187613532565b61462f6040830186613532565b61463c6060830185613452565b6146496080830184613600565b9695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061468d826133dc565b9150614698836133dc565b9250826146a8576146a7614653565b5b828204905092915050565b7f4552433230566f7465733a20746f74616c20737570706c79207269736b73206f60008201527f766572666c6f77696e6720766f74657300000000000000000000000000000000602082015250565b600061470f6030836132d7565b915061471a826146b3565b604082019050919050565b6000602082019050818103600083015261473e81614702565b9050919050565b600060408201905061475a6000830185613452565b6147676020830184613452565b9392505050565b60006080820190506147836000830187613532565b61479060208301866135a9565b61479d6040830185613532565b6147aa6060830184613532565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b60006148186018836132d7565b9150614823826147e2565b602082019050919050565b600060208201905081810360008301526148478161480b565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b6000614884601f836132d7565b915061488f8261484e565b602082019050919050565b600060208201905081810360008301526148b381614877565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b60006149166022836132d7565b9150614921826148ba565b604082019050919050565b6000602082019050818103600083015261494581614909565b9050919050565b6000614957826133dc565b9150614962836133dc565b9250828202614970816133dc565b9150828204841483151761498757614986613bd3565b5b5092915050565b6000614999826133dc565b9150600082036149ac576149ab613bd3565b5b600182039050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b60006149ed6020836132d7565b91506149f8826149b7565b602082019050919050565b60006020820190508181036000830152614a1c816149e0565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000614a59601f836132d7565b9150614a6482614a23565b602082019050919050565b60006020820190508181036000830152614a8881614a4c565b9050919050565b7f53616665436173743a2076616c756520646f65736e27742066697420696e203260008201527f3234206269747300000000000000000000000000000000000000000000000000602082015250565b6000614aeb6027836132d7565b9150614af682614a8f565b604082019050919050565b60006020820190508181036000830152614b1a81614ade565b905091905056fea2646970667358221220a7f362f57a6144566029e437dde3a76d69f366c5fc697d83218092180de3257864736f6c63430008130033";
const isSuperArgs = (xs) => xs.length > 1;
class MyToken__factory extends ethers_1.ContractFactory {
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
exports.MyToken__factory = MyToken__factory;
MyToken__factory.bytecode = _bytecode;
MyToken__factory.abi = _abi;
//# sourceMappingURL=MyToken__factory.js.map