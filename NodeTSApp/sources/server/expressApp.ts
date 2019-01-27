//import { express } from 'express'

import Logger  from "./logger";
import * as express from 'express';
import * as bodyParser from "body-parser";
import * as path from 'path';

declare const __dirname: any;

class ExpressApp {
    app: any = express();
    public static getInstance() {
        return this.instance || (this.instance = new this());
    }
    private static instance: ExpressApp;

    private logger: Logger = new Logger('ExpressApp')
    constructor() {
    }

    init() {
        this.logger.info("Starting Web Server");
        var staticDirPath = path.resolve(__dirname, "../../../AngularApp", "./dist/client");
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.logger.info('DirName:' + staticDirPath);
        // Static
        this.app.use('/', express.static(staticDirPath));

        let port = 8001
        this.app.listen(port, () => {
            this.logger.info("Server running on port => " + port);
        });

}
}

export default ExpressApp.getInstance()
