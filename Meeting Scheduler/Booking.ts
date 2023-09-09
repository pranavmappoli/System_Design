export default class Booking {
  id: Number;
  users: Array<any>;
  name: String;
  start: Number;
  end: Number;
  capacity: Number;
  constructor(
    name: String,
    start: Number,
    end: Number,
    capacity: Number,
    users: Array<any>
  ) {
    this.id = new Date().getTime();
    this.name = name;
    this.users = users;
    this.start = start;
    this.end = end;
    this.capacity = capacity;
  }
  getBookingDetails(): any {
    return {
      id: this.id,
      name: this.name,
      start: this.start,
      end: this.end,
      users: this.users,
      capacity: this.capacity,
    };
  }
}
