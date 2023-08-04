import Observable from "./Observable.js";
class MacObserver {
  constructor() {
    this.observable = new Observable();
  }
  addNotifier(user) {
    this.observable.addObserver(user);
  }
  update() {
    this.Observable.notify();
  }
}
export default MacObserver;
