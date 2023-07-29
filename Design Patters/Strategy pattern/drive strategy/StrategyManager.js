import NormalDriveStrategy from "./NormalDriveStrategy.js";
import SportsDriveStrategy from "./SportsDriveStrategy.js";
class StrategyManager {
  constructor() {
    this.drive_strategies = [
      new NormalDriveStrategy(),
      new SportsDriveStrategy(),
    ];
  }
  addDriveStrategy(strategy) {
    this.drive_strategies.append(strategy);
  }
  findDriveStrategy(strategyName) {
    return this.drive_strategies.find((item) => item.name === strategyName);
  }
}

export default StrategyManager;
