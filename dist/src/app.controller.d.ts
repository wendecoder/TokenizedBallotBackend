import { AppService } from './app.service';
import { MintTokenDto } from './dtos/mintToken.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    mintTokens(body: MintTokenDto): Promise<{
        result: boolean;
    }>;
    getVotes(body: MintTokenDto): Promise<{
        result: string;
    }>;
    getHello(): string;
}
