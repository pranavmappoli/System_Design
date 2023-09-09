"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Notification = /** @class */ (function () {
    function Notification(users) {
        this.users = users;
    }
    Notification.prototype.sendNotification = function () {
        this.users.forEach(function (user) { return console.log("email has sended to:", user); });
    };
    return Notification;
}());
exports.default = Notification;
