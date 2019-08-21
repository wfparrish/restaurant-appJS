class Products {
  constructor() {
    this.viewBuilder = [];
    this.myArrProducts = [];
  }

  passDataToUserLog(id) {
    this.selectedProdDisp = document.getElementById(id);
    //this.selectedProdDisp = burger1;                //Will create a array filled with burgers
    console.log(this.selectedProdDisp);
    this.myArrProducts.push(this.selectedProdDisp);
    this.viewBuilder = this.myArrProducts;
    console.log(productBox.viewBuilder);
  }
}

class ProductDisplays {
  constructor(id, menuItem) {
    this.id = "P-d" + id;
    this.menuItem = menuItem;
  }
}

let productBox = new Products();
let productDisp1 = new ProductDisplays(1, burger1);
let productDisp2 = new ProductDisplays(2, fries1);
let productDisp3 = new ProductDisplays(3, milkshake1);
let productDisp4 = new ProductDisplays(4, chix0);
productBox.passDataToUserLog("addMeBtn1");
console.log(productBox.viewBuilder);

//I should be able to use the Order class to start to create ProductDisplay methods. We should be using parts from the order.js file

//ex. single instances of desired Menu items should be connected one-to-one to ProductDisplay instances, and be created when the passToUserLog() method is triggered. Something like that.

//The order class should be modified to serve as
//a data store for all orders placed. Could use a 2D array, storing each collection of items as an array in an allOrders array
