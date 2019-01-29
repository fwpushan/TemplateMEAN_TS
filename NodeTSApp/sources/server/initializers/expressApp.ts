//import { express } from 'express'

import Logger  from "../logger";
import * as express from 'express';
import * as bodyParser from "body-parser";
import * as path from 'path';
import AppConfig from '../../appConfig'
import MongooseManager from './mongoManager'
import { User, IUserModel } from '../modules/User/models/user.model'
import DataModelController from '../core/dataModel.controller'

declare const __dirname: any;

class UserDMC extends DataModelController<IUserModel> {}

class ExpressApp {
    app: any = express();
    public static getInstance() {
        return this.instance || (this.instance = new this());
    }
    private static instance: ExpressApp;

    private logger: Logger = new Logger('ExpressApp')
    constructor() {
    }

    initExpress() {
        var staticDirPath = path.resolve(__dirname, "../../../../AngularApp", "./dist/client");
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.logger.info('App will use static dir => ' + staticDirPath);
        // Static
        this.app.use('/', express.static(staticDirPath));
    }

    public async init() {
        this.logger.info("Starting Web Server");
        this.initExpress()
        let port = AppConfig.port
        await MongooseManager.init()
        this.app.listen(port, () => {
            this.logger.info("Server running on port => " + port);
        });

    }

    async test(): Promise<void> {
        let dc = new UserDMC(User)
        let user: any = {
            firstName: "Lao",
            lastName: "Ballabh",
            email: "lao.gas@gmail.com",
            password: "abc123"
        }
        await dc.create(user)
        let fetchedUser =await  dc.find({ email : "lao.gas@gmail.com"})
        console.log("Fetched user")
        console.dir(fetchedUser);

    }
}

export default ExpressApp.getInstance()
