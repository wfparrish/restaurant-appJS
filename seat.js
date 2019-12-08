class Seat {
  constructor(seatId, orderArray, userLog) {
    this.seatId = seatId; //the id of the user's seat
    this.orderArray = orderArray; //an array of orders associated with the Seat instance
    this.userLog = userLog; //the userLog instance associated with a seat
    this.viewBuilder = [];
    this.myArrProducts = [];
    this.currentOrder = "";
  }

  // refreshSeatState(seatId, userLog) {
  //Write your method here
  // }

  passDataToUserLog(id) {
    this.selectedProd = document.getElementById(id);
    this.display = "";
    if (id !== null || undefined) {
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
      userLogSeatState.itemTally(seatState.viewBuilder);
      userLogSeatState.presentUserLog(seatState);
      console.log(this.viewBuilder);
    } else {
      return this.viewBuilder;
    }
    //clear the viewBuilder
    //this.viewBuilder = [];
  }

  createOrder(index = order0.incrementId()) {
    //creates an array with product display items. It appears to have scope of the lifetime of the function
    let localViewBuilder = this.viewBuilder;
    this.currentOrder = new Order(index, localViewBuilder);
    //passes the order to the orderArray in the Table class instance
    console.log(assignedTable.seatArray[this.seatId]);
    assignedTable.seatArray[this.seatId].orderArray.push(this.currentOrder);

    //
    // console.log(assignedTable.seatArray);
    tempDB.growDB(this.currentOrder.orderItems);
    this.viewBuilder = [];
    return this.viewBuilder;
  }
}
