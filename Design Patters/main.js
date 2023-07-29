// implement strategy pattern
import Vehicle from "./Strategy pattern/Vehicle.js";
const NormalVehicle = new Vehicle("NORMAL_DRIVE");
const SportsVehicle = new Vehicle("SPORTS_DRIVE");
NormalVehicle.drive();
SportsVehicle.drive();
