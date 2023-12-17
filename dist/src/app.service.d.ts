import { ethers } from 'ethers';
import { ConfigService } from '@nestjs/config';
export declare class AppService {
    private configService;
    contract: ethers.Contract;
    provider: ethers.Provider;
    wallet: ethers.Wallet;
    constructor(configService: ConfigService);
    mintTokenForUsers(address: string): Promise<boolean>;
    getVotes(address: string): Promise<string>;
    getHello(): string;
}
