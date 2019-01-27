"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
var AppLogger = /** @class */ (function () {
    function AppLogger(inputTag) {
        this.tag = "AppLogger";
        this.levels = {
            log: 'Log',
            info: 'Info',
            error: 'Error',
            warning: 'Warning'
        };
        this.tag = inputTag;
    }
    AppLogger.prototype.dateMarker = function () {
        return moment(new Date()).format('MM|D|YYYY HH:mm:ss');
    };
    AppLogger.prototype.formatDate = function (dateStr) {
        return dateStr;
    };
    AppLogger.prototype.formatLogLevel = function (level) {
        return level;
    };
    AppLogger.prototype.formatTag = function () {
        return this.tag;
    };
    AppLogger.prototype.formatBody = function (body, _) {
        return body;
    };
    AppLogger.prototype.finalLog = function (body, logLevel) {
        var datestr = this.formatDate(this.dateMarker());
        var formattedBody = this.formatBody(body, logLevel);
        return "[" + this.formatLogLevel(logLevel) + " | " + datestr + " | " + this.formatTag() + "] : " + formattedBody;
    };
    AppLogger.prototype.stringyfyArg = function (array) {
        if (array.length === 0) {
            return "";
        }
        var result = array.map(function (item) { return "" + item; }).reduce(function (a, b) { return a + b; });
        return result;
    };
    AppLogger.prototype._log = function (start, others, logLevelValue) {
        var rest = this.stringyfyArg(others);
        var body = rest ? start + " " + rest : start;
        var finalLog = this.finalLog(body, logLevelValue);
        console.log(finalLog);
    };
    AppLogger.prototype.log = function (start) {
        var others = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            others[_i - 1] = arguments[_i];
        }
        this._log(start, others, this.levels.log);
    };
    AppLogger.prototype.info = function (start) {
        var others = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            others[_i - 1] = arguments[_i];
        }
        this._log(start, others, this.levels.info);
    };
    AppLogger.prototype.error = function (start) {
        var others = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            others[_i - 1] = arguments[_i];
        }
        this._log(start, others, this.levels.error);
    };
    AppLogger.prototype.warning = function (start) {
        var others = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            others[_i - 1] = arguments[_i];
        }
        this._log(start, others, this.levels.warning);
    };
    AppLogger.prototype.testLogger = function () {
        this.log("Hello World");
        this.info("Hello World");
        this.warning("Hello World");
        this.error("Hello World");
    };
    return AppLogger;
}());
exports.default = AppLogger;
