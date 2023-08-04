import TopUpDecorator from "./TopUpDecorator.js";

class ExtraCheese extends TopUpDecorator {
  constructor(basePizza) {
    super();
    this.basePizza = basePizza;
  }
  cost() {
    return this.basePizza.cost() + 40;
  }
}
export default ExtraCheese;
