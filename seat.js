class Seat {
  constructor(seatId, orderArray, userLog) {
    this.seatId = seatId; //the id of the user's seat
    this.orderArray = orderArray; //an array of orders associated with the Seat instance
    this.userLog = userLog; //the userLog instance associated with a seat
    this.viewBuilder = [];
    this.myArrProducts = [];
    this.currentOrder = "";
  }

  passDataToUserLog(id) {
    this.selectedProd = document.getElementById(id);
    this.display = "";
    //creates a menu item and puts it in a product display object
    switch (id) {
      case "addMeBtn1":
        this.selectedProd = new Burger();
        this.display = new ProductDisplay(this.selectedProd);
        break;
      case "addMeBtn2":
        this.selectedProd = new Fries();
        this.display = new ProductDisplay(this.selectedProd);
        break;
      case "addMeBtn3":
        this.selectedProd = new Milkshake();
        this.display = new ProductDisplay(this.selectedProd);
        break;
      case "addMeBtn4":
        this.selectedProd = new Chicken();
        this.display = new ProductDisplay(this.selectedProd);
        break;
    }
    //creates an array of product displays and shows the content of the product displays in the userLog view
    this.myArrProducts.push(this.display);
    this.viewBuilder = this.myArrProducts;
    userLog1.itemTally(seatState.viewBuilder);
    userLog1.presentUserLog();
    //clear the viewBuilder
    //this.viewBuilder = [];
    return this.viewBuilder;
  }

  createOrder(index = order0.incrementId()) {
    //creates an array with product display items. It appears to have scope of the lifetime of the function

    let localViewBuilder = this.viewBuilder;
    this.currentOrder = new Order(index, localViewBuilder);
    //passes the order to the orderArray in the Table class instance
    assignedTable.seatArray[0].orderArray = this.currentOrder;

    //
    // console.log(assignedTable.seatArray);
    tempDB.growDB(this.currentOrder.orderItems);
    this.viewBuilder = [];
    console.log(localViewBuilder);
    return this.viewBuilder;
  }
}

let seat1 = new Seat(1, [order1], userLog1);
let seat2 = new Seat(2, [order2, order5], userLog2);
let seat3 = new Seat(3, [order5, order1], userLog3);
let seat4 = new Seat(4, [order4, order1, order4], userLog4);
let seat5 = new Seat(5, [order3, order4], userLog5);

let seatArray = [seat1, seat2, seat3, seat4, seat5];
let seatState = new Seat();
