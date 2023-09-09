export default class Calender {
  booking: Array<any>;
  constructor() {
    this.booking = [];
  }

  addBooking(start: Number, end: Number): void {
    if (this.isBookingAvailable(start, end)) {
      this.booking.push([start, end]);
    }
  }
  isBookingAvailable(start: Number, end: Number): boolean {
    return true;
  }
}
