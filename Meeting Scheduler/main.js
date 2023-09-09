"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BookingManager_1 = require("./BookingManager");
var manager = new BookingManager_1.default();
var booking = manager.createBooking("F>ally booking", new Date().getTime(), new Date().getTime() + 50000, 10, ["rahul", "amal"]);
manager.addRoom(20);
manager.addBooking(booking);
