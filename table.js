class Table {
  constructor(
    tableId,
    party,
    seatArray,
    checkArray,
    orderArray,
    userLogArray,
    selectedSeat,
    calc1
  ) {
    this.tableId = tableId;
    this.party = party;
    this.seatArray = seatArray; //the array of seats that are part of the Table instance
    this.checkArray = checkArray; //the array of checks that are part of the Table instance
    this.orderArray = orderArray; //the array of orders that were placed by party members
    this.userLogArray = userLogArray; //the array of logs that are connected to seats'
    this.selectedSeat = selectedSeat; //the default seat or the seat selected by the user of the program
    this.calc1 = calc1;
  }

  selectSeat(id) {
    switch (id) {
      case "seat1":
        calc1.clearCalculator();

        this.selectedSeat = assignedTable.seatArray[1].seatId;
        seatState = this.seatArray[1];
        seatState.currentOrder = seatState.orderArray;
        debugger;
        seatState.currentOrder[0].orderItems.forEach(item => {
          let productDisplay = new ProductDisplay(item);
          seatState.currentOrder.push(productDisplay);
        });
        //I need to create a new method here to present the userLog. The seat's selection and the necessity to present info to the userLog is not the same functionality as adding an item to the order and presenting the updated userLog.

        //I could copy and paste some of the HTML for the view from the userLog.js file.
        seat1.userLog.presentUserLog(seatState);
        break;

      case "seat2":
        calc1.clearCalculator();
        this.selectedSeat = assignedTable.seatArray[2].seatId;
        //a reference to the data stored for the seat
        seatState = this.seatArray[2];
        seat2.userLog.presentUserLog(seatState);
        break;

      case "seat3":
        calc1.clearCalculator();
        this.selectedSeat = assignedTable.seatArray[3].seatId;
        seatState = this.seatArray[3];
        seat3.userLog.presentUserLog(seatState);
        break;

      case "seat4":
        calc1.clearCalculator();
        this.selectedSeat = assignedTable.seatArray[4].seatId;
        seatState = this.seatArray[4];
        seat4.userLog.presentUserLog(seatState);
        break;

      case "seat5":
        calc1.clearCalculator();
        this.selectedSeat = assignedTable.seatArray[5].seatId;
        seatState = this.seatArray[5];
        seat5.userLog.presentUserLog(seatState);
        break;

      default:
        break;
    }
  }
}
