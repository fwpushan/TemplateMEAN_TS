
declare const process: any;

class AppConfig {
    
    private static instance: AppConfig;

    public port: number = 0;
    public host: string = '127.0.0.1';
    public secure: boolean = false;
    public isProduction: boolean = false;
    public appName: string = 'template-app';
    public dbs: string[] = ['templateDB'];

    public static getInstance() {
        return this.instance || (this.instance = new this());
    }

    constructor() {
        this.port = process.env.PORT || 8002;
        this.host = process.env.host || '127.0.0.1';
    }
    
    // environments:  = ['local-dev', 'docker-dev', 'prod']
    

    public getEnv = () => {
        return process.env.NODE_ENV;
    }

    public mongoURL = () => {
        const env = process.env.NODE_ENV || 'dev-local';
        const mongoURL = this.mongoEnvironments()[env];
        const dbName = this.mongoDb();
        if (mongoURL && dbName) {
            // console.log(`Env Mongo - ${mongoURL}: ${dbName}`);
            return mongoURL +  dbName;
        } else {
            throw new Error('AppConfig: MONGO URL Not available');
        }
    }


    private mongoEnvironments = () => {
        return {
            'dev-docker' : 'mongodb://mongo:27017/',
            'dev-local': 'mongodb://127.0.0.1:27017/',
            'prod': 'mongodb://127.0.0.1:27017/'
        };
    }

    private mongoDb = () => {
        return 'mongo-db';
    }


}

export default AppConfig.getInstance();
