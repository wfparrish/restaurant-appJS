class Table {
  constructor(tableId, party, seatArray, checkArray, orderArray, userLogArray) {
    this.tableId = tableId;
    this.party = party;
    this.seatArray = seatArray; //the array of seats that are part of the Table instance
    this.checkArray = checkArray; //the array of checks that are part of the Table instance
    this.orderArray = orderArray; //the array of orders that were placed by party members
    this.userLogArray = userLogArray; //the array of logs that are connected to seats
  }

  selectSeat(id) {
    switch (id) {
      case "seat1":
        console.log(this.seatArray[0]);
        seat1.userLog.presentUserLog();
        break;

      case "seat2":
        console.log(this.seatArray[1]);
        seat2.userLog.presentUserLog();
        break;

      case "seat3":
        console.log(this.seatArray[2]);
        seat3.userLog.presentUserLog();
        break;

      case "seat4":
        console.log(this.seatArray[3]);
        seat4.userLog.presentUserLog();
        break;

      case "seat5":
        console.log(this.seatArray[4]);
        seat5.userLog.presentUserLog();
        break;

      default:
        break;
    }
  }
}
