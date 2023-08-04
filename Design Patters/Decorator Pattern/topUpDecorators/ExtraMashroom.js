import TopUpDecorator from "./TopUpDecorator.js";

class ExtraMashroom extends TopUpDecorator {
  constructor(basePizza) {
    super();
    this.basePizza = basePizza;
  }
  cost() {
    return this.basePizza.cost() + 70;
  }
}
export default ExtraMashroom;
