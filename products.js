class Products {
  constructor() {
    this.viewBuilder = [];
  }
}

class ProductDisplays {
  constructor(id, menuItem) {
    this.id = "P-d" + id;
    this.menuItem = menuItem;
  }
}

//I should be able to use the Order class to start to create ProductDisplay methods. We should be using parts from the order.js file

//ex. single instances of desired Menu items should be connected one-to-one to ProductDisplay instances, and be created when the passToUserLog() method is triggered. Something like that.

//The order class should be modified to serve as
//a data store for all orders placed. Could use a 2D array, storing each collection of items as an array in an allOrders array
