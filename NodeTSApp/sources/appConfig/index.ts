
declare const process: any;



class AppConfig {
    public static getInstance() {
		return this.instance || (this.instance = new this());
	}
    private static instance: AppConfig;


    private mongoEnvironments = () => {
        return {
            "dev-docker" : "mongodb://mongo:27017/",
            "dev-local": "mongodb://127.0.0.1:27017/",
            "prod": "mongodb://127.0.0.1:27017/"
        }
    }

    private mongoDb = () => {
        return "templateWebAppDB"
    }

    public port: number = 0
    public host: string = "127.0.0.1"
    public secure: boolean = false
    public isProduction: boolean = false
    public appName: string = "Template-ts-webApp"
    public dbs: string[] = ['templateDB']
    //environments:  = ['local-dev', 'docker-dev', 'prod']
    constructor() {
        this.port = process.env.PORT || 8001
        this.host = process.env.host || "127.0.0.1"
    }

    public getEnv = () => {
        return process.NODE_ENV;
    }

    public mongoURL = () => {
        let env = process.NODE_ENV || 'dev-local'
        let mongoURL = this.mongoEnvironments[env];
        let dbName = this.mongoDb;
        if (mongoURL && dbName) {
            return mongoURL + "/" + dbName;
        } else {
            throw new Error("AppConfig: MONGO URL Not available");
        }
    }


}

export default AppConfig.getInstance();
