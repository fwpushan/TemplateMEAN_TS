"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Applogger_1 = require("../../Applogger");
var chalk_1 = require("chalk");
var Logger = /** @class */ (function (_super) {
    __extends(Logger, _super);
    function Logger(inputTag) {
        return _super.call(this, inputTag) || this;
    }
    Logger.prototype.formatBody = function (body, logLevel) {
        switch (logLevel) {
            case this.levels.log:
                return body;
            case this.levels.error:
                return chalk_1.default.red(body);
            case this.levels.info:
                return chalk_1.default.blue(body);
            case this.levels.warning:
                return chalk_1.default.yellow(body);
            default:
                return body;
        }
    };
    Logger.prototype.formatDate = function (dateStr) {
        return chalk_1.default.green.bold(dateStr);
    };
    Logger.prototype.formatTag = function () {
        return chalk_1.default.cyan.bold(this.tag);
    };
    Logger.prototype.formatLogLevel = function (logLevel) {
        switch (logLevel) {
            case this.levels.log:
                return chalk_1.default.bold(logLevel);
            case this.levels.error:
                return chalk_1.default.bold.red(logLevel);
            case this.levels.info:
                return chalk_1.default.bold.blue(logLevel);
            case this.levels.warning:
                return chalk_1.default.bold.yellow(logLevel);
            default:
                return chalk_1.default.bold(logLevel);
        }
    };
    return Logger;
}(Applogger_1.default));
exports.default = Logger;
