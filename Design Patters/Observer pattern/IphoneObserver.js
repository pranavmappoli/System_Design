import Observable from "./Observable.js";
class IphoneObserver {
  constructor() {
    this.observable = new Observable();
  }
  addNotifier(user) {
    this.observable.addObserver(user);
  }
  deleteNotifier(user) {
    this.observable.deleteObserver(user);
  }
  update() {
    this.observable.notify();
  }
}
export default IphoneObserver;
