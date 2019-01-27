"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppConfig = /** @class */ (function () {
    //environments:  = ['local-dev', 'docker-dev', 'prod']
    function AppConfig() {
        var _this = this;
        this.mongoEnvironments = function () {
            return {
                "dev-docker": "mongodb://mongo:27017/",
                "dev-local": "mongodb://127.0.0.1:27017/",
                "prod": "mongodb://127.0.0.1:27017/"
            };
        };
        this.mongoDb = function () {
            return "templateWebAppDB";
        };
        this.port = 0;
        this.host = "127.0.0.1";
        this.secure = false;
        this.isProduction = false;
        this.appName = "Template-ts-webApp";
        this.dbs = ['templateDB'];
        this.getEnv = function () {
            return process.NODE_ENV;
        };
        this.mongoURL = function () {
            var env = process.NODE_ENV || 'dev-local';
            var mongoURL = _this.mongoEnvironments[env];
            var dbName = _this.mongoDb;
            if (mongoURL && dbName) {
                return mongoURL + "/" + dbName;
            }
            else {
                throw new Error("AppConfig: MONGO URL Not available");
            }
        };
        this.port = process.env.PORT || 8001;
        this.host = process.env.host || "127.0.0.1";
    }
    AppConfig.getInstance = function () {
        return this.instance || (this.instance = new this());
    };
    return AppConfig;
}());
exports.default = AppConfig.getInstance();
