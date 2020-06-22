class Calculator {
  constructor() {
    this.total = 0;
  }

  addition(item) {
    this.total
    item.orderItems.forEach((element)=> {
      this.total += element.menuItem.price;
    });
    console.log(this.total)
    return this.total;
  }
  subtraction(item) {
    this.total = this.total - item.menuItem.price;
    return this.total;
  }
  clearCalculator() {
    this.total = 0;
  }
  // static multiplication() {}
  // static division() {}
}
