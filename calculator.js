class Calculator {
  constructor() {
    this.total = 0;
  }

  addition(item) {
    let price = item.menuItem.price;
    let total = this.total + price;
    return total;
  }
  subtraction(item) {
    return (this.total = this.total - item.menuItem.price);
  }
  // static multiplication() {}
  // static division() {}
}

let calc1 = new Calculator();
