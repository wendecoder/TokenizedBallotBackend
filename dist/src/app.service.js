"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const tokenJson = require("./assets/MyToken.json");
const ethers_1 = require("ethers");
const config_1 = require("@nestjs/config");
const MINT_VALUE = ethers_1.ethers.parseUnits('10');
let AppService = class AppService {
    constructor(configService) {
        this.configService = configService;
        this.provider = new ethers_1.ethers.JsonRpcProvider(this.configService.get('RPC_ENDPOINT_URL'));
        this.wallet = new ethers_1.ethers.Wallet(this.configService.get('PRIVATE_KEY'), this.provider);
        this.contract = new ethers_1.ethers.Contract(this.configService.get('TOKEN_ADDRESS'), tokenJson.abi, this.wallet);
    }
    async mintTokenForUsers(address) {
        try {
            console.log("inside mintokenforusersapi");
            const contract = this.contract;
            console.log("yes inside mintokenforusers");
            console.log(address);
            console.log(this.contract.MINTER_ROLE());
            console.log(this.wallet);
            const hasMinterRole = await contract.hasRole(contract.MINTER_ROLE(), this.wallet.address);
            if (!hasMinterRole) {
                throw new Error("You don't have the MINTER_ROLE.");
            }
            console.log("has minter role");
            const mintTX = await contract.mint(address, MINT_VALUE);
            await mintTX.wait();
            console.log(`Minted ${MINT_VALUE.toString()} decimal units to account ${address ?? ""}\n`);
            const balanceBN = await contract.balanceOf(address ?? "");
            console.log(`Account ${address ?? ""} has ${balanceBN.toString()} decimal units of MyToken\n`);
            return true;
        }
        catch (error) {
            console.error('Error minting tokens:', error.message);
            throw error;
        }
    }
    async getVotes(address) {
        const contract = this.contract;
        const votesAfter = await contract.getVotes(address);
        console.log(`Account ${address} has ${votesAfter.toString()} units of voting power after delegating\n`);
        return ethers_1.ethers.formatUnits(votesAfter);
    }
    getHello() {
        return 'Hello World!';
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AppService);
//# sourceMappingURL=app.service.js.map