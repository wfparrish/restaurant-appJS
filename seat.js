class Seat {
  constructor(seatId, orderArray, userLog) {
    this.seatId = seatId; //the id of the user's seat
    this.orderArray = orderArray; //an array of orders associated with the Seat instance
    this.userLog = userLog; //the userLog instance associated with a seat
    this.viewBuilder = [];
    this.myArrProducts = [];
    this.currentOrder = [];
    this.orderHolder = [];
  }

  // refreshSeatState(seatId, userLog) {
  //Write your method here
  // }

  createOrder(index = order0.incrementId()) {
    //creates an array with product display items. It appears to have scope of the lifetime of the function
    let localViewBuilder = this.viewBuilder;
    this.currentOrder = new Order(index, localViewBuilder);
    //passes the order to the orderArray in the Table class instance
    assignedTable.seatArray[this.seatId].orderArray.push(this.currentOrder);

    // console.log(assignedTable.seatArray);
    tempDB.growDB(this.currentOrder.orderItems);
    this.viewBuilder = [];
    return this.viewBuilder;
  }

  passDataToUserLog(id) {
    this.selectedProd = document.getElementById(id);
    this.display = "";
    if (id !== null && id !== undefined) {
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

      //sets the seatState to the selected seat
      seatState = assignedTable.seatArray[assignedTable.selectedSeat];

      //creates an array of product displays and shows the content of the product displays in the userLog view
      this.myArrProducts.push(this.display);
      this.viewBuilder = this.myArrProducts;
      let index = order0.incrementId();
      this.orderHolder = new Order(index, this.viewBuilder);
      this.currentOrder[this.currentOrder.length - 1] = this.orderHolder;
      seatState.userLog.itemTally(seatState.currentOrder);
      seatState.userLog.presentUserLog(seatState);
    } else {
      return this.viewBuilder;
    }
    //clear the viewBuilder
    //this.viewBuilder = [];
  }
}
