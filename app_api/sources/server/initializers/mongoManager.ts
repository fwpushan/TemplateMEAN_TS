import mongoose = require("mongoose")
//import * as _ from "lodash"
import Logger from '../logger'
import AppConfig from "../../appConfig"

class MongooseManager {
    
    private static instance: MongooseManager;
    private logger: Logger = new Logger('MongooseManager');

    public static getInstance() {
        return this.instance || (this.instance = new this());
    }

    public async init(): Promise<void> {
        this.logger.info('Will Connect MongoDB');
        this.logger.info(`Env: ${process.env.NODE_ENV}`);
        global.Promise = require('q').Promise;
        mongoose.Promise = global.Promise;
        const mongoURL: string = AppConfig.mongoURL();
        this.logger.info(`Mongo-URL: ${mongoURL}`);
        await mongoose.connect(mongoURL, { useNewUrlParser: true});
        this.logger.info('MongoDB Connected');
    }
}

export default MongooseManager.getInstance();
