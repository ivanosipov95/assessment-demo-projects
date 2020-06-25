class EnvConfig {
    constructor(public port: string, public serviceName: string) {
    }
}

export const envConfig = new EnvConfig(
    process.env.port || '3002',
    'book'
);

