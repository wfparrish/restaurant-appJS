class Order {
  constructor(orderId, orderItems) {
    //this.orderId = Order.incrementId();
    this.orderId = orderId;
    this.orderItems = orderItems;
  }

  incrementId() {
    if (!this.latestId) this.latestId = 1;
    else this.latestId++;
    let orderId = this.latestId;
    return orderId;
  }
}

//Current script for the application: Order creation testing

//6 instances of desired Menu items instantiated
let chix0 = new Chicken((this.price = 3.59));
let sides0 = new Sides((this.price = 1.75));
let drink0 = new Drink((this.price = 1.75));
let burger1 = new Burger((this.price = 3.89));
let fries1 = new Fries((this.price = 0.99));
let milkshake1 = new Milkshake((this.price = 2.99));

//initial message in UserLog created with variable values(zeroth Order)
let initialVals = [chix0, sides0, drink0];
let order0 = new Order(0, initialVals);

//an Order object created with an id and orderTally array(first Order)
let orderTally = [burger1, fries1, milkshake1];
let order1 = new Order(1, orderTally);
