import BookingManager from "./BookingManager";
const manager = new BookingManager();
const booking = manager.createBooking(
  "F>ally booking",
  new Date().getTime(),
  new Date().getTime() + 50000,
  10,
  ["rahul", "amal"]
);
manager.addRoom(20);
manager.addBooking(booking);
