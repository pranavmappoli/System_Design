import Calender from "./Calender";
import Booking from "./Booking";

export default class Room {
  id: Number;
  capacity: Number;
  calender: Calender;
  constructor(id: Number, capacity: Number) {
    this.id = id;
    this.capacity = capacity;
    this.calender = new Calender();
  }
  checkAvailability(start: Number, end: Number, capacity: Number) {
    if (
      this.calender.isBookingAvailable(start, end) &&
      this.capacity >= capacity
    ) {
      return true;
    }
    return false;
  }
  bookRoom(booking: Booking) {
    const { start, end, capacity } = booking;
    this.calender.addBooking(start, end);
  }
}
