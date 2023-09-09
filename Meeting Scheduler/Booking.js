"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Booking = /** @class */ (function () {
    function Booking(name, start, end, capacity, users) {
        this.id = new Date().getTime();
        this.name = name;
        this.users = users;
        this.start = start;
        this.end = end;
        this.capacity = capacity;
    }
    Booking.prototype.getBookingDetails = function () {
        return {
            id: this.id,
            name: this.name,
            start: this.start,
            end: this.end,
            users: this.users,
            capacity: this.capacity,
        };
    };
    return Booking;
}());
exports.default = Booking;
