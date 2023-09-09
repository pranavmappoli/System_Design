"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calender = /** @class */ (function () {
    function Calender() {
        this.booking = [];
    }
    Calender.prototype.addBooking = function (start, end) {
        if (this.isBookingAvailable(start, end)) {
            this.booking.push([start, end]);
        }
    };
    Calender.prototype.isBookingAvailable = function (start, end) {
        return true;
    };
    return Calender;
}());
exports.default = Calender;
