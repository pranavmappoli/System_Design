class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  notify() {
    console.log("email has sended to", this.name, " in ", this.email);
  }
}
export default User;
