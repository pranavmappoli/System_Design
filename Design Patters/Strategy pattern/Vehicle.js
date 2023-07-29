import StrategyManager from "./drive strategy/StrategyManager.js";
class Vehicle {
  constructor(drive_strategy_name) {
    this.strategyManger = new StrategyManager();
    this.drive_strategy =
      this.strategyManger.findDriveStrategy(drive_strategy_name);
  }
  drive() {
    this.drive_strategy.drive();
  }
}
export default Vehicle;
