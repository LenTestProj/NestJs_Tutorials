import { DevConfigService } from './common/providers/DevConfigService';
export declare class AppService {
    private devConfigService;
    private config;
    constructor(devConfigService: DevConfigService, config: {
        port: string;
    });
    getHello(): string;
}
