class Calculator {
  constructor() {
    this.total = 0;
  }

  addition(item) {
    this.total = this.total + item.menuItem.price;
    return this.total;
  }
  subtraction(item) {
    return (total = total - item.menuItem.price);
  }
  clearCalculator() {
    this.total = 0;
  }
  // static multiplication() {}
  // static division() {}
}
