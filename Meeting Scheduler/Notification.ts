export default class Notification {
  users: Array<any>;
  constructor(users: Array<any>) {
    this.users = users;
  }
  sendNotification() {
    this.users.forEach((user) => console.log("email has sended to:", user));
  }
}
