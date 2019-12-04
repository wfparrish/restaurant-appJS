class Table {
  constructor(
    tableId,
    party,
    seatArray,
    checkArray,
    orderArray,
    userLogArray,
    selectedSeat
  ) {
    this.tableId = tableId;
    this.party = party;
    this.seatArray = seatArray; //the array of seats that are part of the Table instance
    this.checkArray = checkArray; //the array of checks that are part of the Table instance
    this.orderArray = orderArray; //the array of orders that were placed by party members
    this.userLogArray = userLogArray; //the array of logs that are connected to seats'
    this.selectedSeat = selectedSeat; //the default seat or the seat selected by the user of the program
  }

  selectSeat(id) {
    switch (id) {
      case "seat1":
        this.selectedSeat = assignedTable.seatArray[1].seatId;
        seatState = this.seatArray[1];
        seat1.userLog.presentUserLog(seatState);
        break;

      case "seat2":
        this.selectedSeat = assignedTable.seatArray[2].seatId;
        //a reference to the data stored for the seat
        seatState = this.seatArray[2];
        seat2.userLog.presentUserLog(seatState);
        break;

      case "seat3":
        this.selectedSeat = assignedTable.seatArray[3].seatId;
        seatState = this.seatArray[3];
        seat3.userLog.presentUserLog(seatState);
        break;

      case "seat4":
        this.selectedSeat = assignedTable.seatArray[4].seatId;
        seatState = this.seatArray[4];
        seat4.userLog.presentUserLog(seatState);
        break;

      case "seat5":
        this.selectedSeat = assignedTable.seatArray[5].seatId;
        seatState = this.seatArray[5];
        seat5.userLog.presentUserLog(seatState);
        break;

      default:
        break;
    }
  }
}
