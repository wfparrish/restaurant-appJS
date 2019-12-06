class Calculator {
  constructor() {
    this.total = 0;
  }

  addition(item) {
    this.total = this.total + item.price;
    return this.total;
  }
  subtraction(item) {
    return (total = total - item.menuItem.price);
  }
  // static multiplication() {}
  // static division() {}
}

let calc1 = new Calculator();
