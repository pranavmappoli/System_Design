"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DatabaseAccess = /** @class */ (function () {
    function DatabaseAccess() {
    }
    DatabaseAccess.getAccessToken = function () {
        if (!this.accessToken) {
            this.accessToken = new DatabaseAccess();
            return this.accessToken;
        }
        return this.accessToken;
    };
    DatabaseAccess.prototype.checkToken = function () {
        return false;
    };
    DatabaseAccess.accessToken = null;
    return DatabaseAccess;
}());
exports.default = DatabaseAccess;
