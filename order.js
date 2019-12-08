class Order {
  constructor(orderId, orderItems) {
    //this.orderId = Order.incrementId();
    this.orderId = orderId;
    this.orderItems = orderItems;
  }

  incrementId() {
    if (!this.latestId) this.latestId = 6;
    else this.latestId++;
    let orderId = this.latestId;
    return orderId;
  }
}
