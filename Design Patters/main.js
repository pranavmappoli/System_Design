"use strict";
// implement strategy pattern
Object.defineProperty(exports, "__esModule", { value: true });
// import Vehicle from "./Strategy pattern/Vehicle.js";
// const NormalVehicle = new Vehicle("NORMAL_DRIVE");
// const SportsVehicle = new Vehicle("SPORTS_DRIVE");
// NormalVehicle.drive();
// SportsVehicle.drive();
//implement Observer pattern
// import User from "./Observer pattern/User.js";
// import IphoneObserver from "./Observer pattern/IphoneObserver.js";
// const pranav = new User("pranav", "pranav@gmail.com");
// const rahul = new User("rahul", "rahul@gmail.com");
// const iphoneObserver = new IphoneObserver();
// iphoneObserver.addNotifier(pranav);
// iphoneObserver.addNotifier(rahul);
// iphoneObserver.update();
// iphoneObserver.deleteNotifier(pranav);
// iphoneObserver.update();
// implement decorator pattern
// import BazePizza from "./Decorator Pattern/BasePizza.js";
// import VegDelightPizza from "./Decorator Pattern/VegDelightPizza.js";
// import ExtraCheese from "./Decorator Pattern/topUpDecorators/extraCheese.js";
// import ExtraMashroom from "./Decorator Pattern/topUpDecorators/ExtraMashroom.js";
// import IphoneObserver from "./Observer pattern/IphoneObserver.js";
// const myBasePizza = new BazePizza();
// console.log(myBasePizza.cost());
// const extraCheesedPizza = new ExtraCheese(myBasePizza);
// console.log(extraCheesedPizza.cost());
// const extraCheesedPizzaWithMashroom = new ExtraMashroom(extraCheesedPizza);
// console.log(extraCheesedPizzaWithMashroom.cost());
// implement Factory pattern
// import NotificationFactory from "./Factory pattern/NotificationFactory.js";
// const notificationF = new NotificationFactory();
// const notification = notificationF.create("SMS");
// notification.send();
//implement singleton pattern
var Database_1 = require("./Singleton pattern/Database");
var instance1 = Database_1.default.getAccessToken();
var instance2 = Database_1.default.getAccessToken();
console.log(instance1 === instance2);
