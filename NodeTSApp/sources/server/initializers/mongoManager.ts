import mongoose = require("mongoose")
//import * as _ from "lodash"
import Logger from '../logger'
import AppConfig from "../../appConfig"

class MongooseManager {
    public static getInstance() {
        return this.instance || (this.instance = new this());
    }
    private static instance: MongooseManager;

    private logger: Logger = new Logger('MongooseManager')

    public async init(): Promise<void> {
        this.logger.info("Will Connect MongoDB");
        global.Promise = require("q").Promise;
        mongoose.Promise = global.Promise;
        let mongoURL: string = AppConfig.mongoURL()
        this.logger.info(`Mongo-URL: ${mongoURL}`);
        await mongoose.connect(mongoURL, { useNewUrlParser: true})
        this.logger.info("MongoDB Connected")
    }


}

export default MongooseManager.getInstance();
