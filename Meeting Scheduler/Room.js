"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calender_1 = require("./Calender");
var Room = /** @class */ (function () {
    function Room(id, capacity) {
        this.id = id;
        this.capacity = capacity;
        this.calender = new Calender_1.default();
    }
    Room.prototype.checkAvailability = function (start, end, capacity) {
        if (this.calender.isBookingAvailable(start, end) &&
            this.capacity >= capacity) {
            return true;
        }
        return false;
    };
    Room.prototype.bookRoom = function (booking) {
        var start = booking.start, end = booking.end, capacity = booking.capacity;
        this.calender.addBooking(start, end);
    };
    return Room;
}());
exports.default = Room;
