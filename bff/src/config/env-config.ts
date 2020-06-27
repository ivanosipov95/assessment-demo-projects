class EnvConfig {
    constructor(
        public port: string,
        public serviceName: string,
        public bookServiceUrl: string,
        public authorServiceUrl: string,
        public shopServiceUrl: string,
        public referenceDataServiceUrl: string,
    ) {
    }
}

export const envConfig = new EnvConfig(
    process.env.port || '3000',
    'bff',
    'http://localhost:3002',
    'http://localhost:3001',
    'http://localhost:3004',
    'http://localhost:3003',
);

