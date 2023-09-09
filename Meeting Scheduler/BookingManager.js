"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Room_1 = require("./Room");
var Booking_1 = require("./Booking");
var Notification_1 = require("./Notification");
var BookingManager = /** @class */ (function () {
    function BookingManager() {
        this.roomCount = 0;
        this.rooms = [];
    }
    BookingManager.prototype.addRoom = function (capacity) {
        this.roomCount += 1;
        this.rooms.push(new Room_1.default(this.roomCount, capacity));
    };
    BookingManager.prototype.addBooking = function (booking) {
        var _a = booking.getBookingDetails(), start = _a.start, end = _a.end, capacity = _a.capacity, users = _a.users;
        var room;
        for (var i = 0; i < this.rooms.length; i++) {
            if (this.rooms[i].checkAvailability(start, end, capacity)) {
                room = this.rooms[i];
                break;
            }
        }
        if (room) {
            room.bookRoom(booking);
            console.log("booking has confirmed");
            this.sendNotification(users);
            return true;
        }
        else {
            console.log("no rooms available");
            return false;
        }
    };
    BookingManager.prototype.createBooking = function (name, start, end, capacity, users) {
        return new Booking_1.default(name, start, end, capacity, users);
    };
    BookingManager.prototype.sendNotification = function (users) {
        var service = new Notification_1.default(users);
        service.sendNotification();
    };
    return BookingManager;
}());
exports.default = BookingManager;
