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
        this.selectedSeat = assignedTable.seatArray[0].seatId;
        seatState = this.seatArray[0];
        console.log(this.seatArray[0]);
        console.log(seatState);
        seat1.userLog.presentUserLog(seatState);
        break;

      case "seat2":
        this.selectedSeat = assignedTable.seatArray[1].seatId;
        seatState = this.seatArray[1];
        console.log(this.seatArray[1]);
        console.log(seatState);
        seat2.userLog.presentUserLog(seatState);
        break;

      case "seat3":
        this.selectedSeat = assignedTable.seatArray[2].seatId;
        seatState = this.seatArray[2];
        console.log(this.seatArray[2]);
        console.log(seatState);
        seat3.userLog.presentUserLog(seatState);
        break;

      case "seat4":
        this.selectedSeat = assignedTable.seatArray[3].seatId;
        seatState = this.seatArray[3];
        console.log(this.seatArray[3]);
        console.log(seatState);
        seat4.userLog.presentUserLog(seatState);
        break;

      case "seat5":
        this.selectedSeat = assignedTable.seatArray[4].seatId;
        seatState = this.seatArray[4];
        console.log(this.seatArray[4]);
        console.log(seatState);
        seat5.userLog.presentUserLog(seatState);
        break;

      default:
        break;
    }
  }
}
