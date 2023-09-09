import Room from "./Room";
import Booking from "./Booking";
import Notification from "./Notification";
export default class BookingManager {
  rooms: Array<any>;
  roomCount: number;
  constructor() {
    this.roomCount = 0;
    this.rooms = [];
  }
  addRoom(capacity: Number): void {
    this.roomCount += 1;
    this.rooms.push(new Room(this.roomCount, capacity));
  }
  addBooking(booking: Booking) {
    const { start, end, capacity, users } = booking.getBookingDetails();

    let room;
    for (let i = 0; i < this.rooms.length; i++) {
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
    } else {
      console.log("no rooms available");
      return false;
    }
  }
  createBooking(
    name: String,
    start: Number,
    end: Number,
    capacity: Number,
    users: Array<any>
  ): Booking {
    return new Booking(name, start, end, capacity, users);
  }
  sendNotification(users: Array<any>): void {
    const service = new Notification(users);
    service.sendNotification();
  }
}
