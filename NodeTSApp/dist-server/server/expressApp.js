"use strict";
//import { express } from 'express'
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = require("./logger");
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var ExpressApp = /** @class */ (function () {
    function ExpressApp() {
        this.app = express();
        this.logger = new logger_1.default('ExpressApp');
    }
    ExpressApp.getInstance = function () {
        return this.instance || (this.instance = new this());
    };
    ExpressApp.prototype.init = function () {
        var _this = this;
        this.logger.info("Starting Web Server");
        var staticDirPath = path.resolve(__dirname, "../../../AngularApp", "./dist/client");
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.logger.info('DirName:' + staticDirPath);
        // Static
        this.app.use('/', express.static(staticDirPath));
        var port = 8001;
        this.app.listen(port, function () {
            _this.logger.info("Server running on port => " + port);
        });
    };
    return ExpressApp;
}());
exports.default = ExpressApp.getInstance();
