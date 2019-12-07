class Calculator {
  constructor() {
    this.total = 0;
  }

  addition(item) {
    //debugger;
    this.total = this.total + item.price;
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

let calc1 = new Calculator();
