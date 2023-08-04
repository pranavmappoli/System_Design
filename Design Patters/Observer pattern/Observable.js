class Observable {
  constructor() {
    this.observers = [];
  }
  addObserver(observer) {
    this.observers.push(observer);
  }
  deleteObserver(observer) {
    this.observers = this.observers.filter(
      (item) => item.email != observer.email
    );
  }
  notify() {
    this.observers.forEach((user) => {
      user.notify();
    });
  }
}
export default Observable;
