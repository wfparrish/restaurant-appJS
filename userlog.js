class UserLog {
  constructor(userLogId, table, check, seat) {
    this.userLogId = userLogId;
    this.tableId = table.tableId;
    this.seatId = seat.seatId;
    this.checkId = check.checkId;
    this.itemList = [];
  }

  //clears the userLog state of data
  refreshUserLog() {
    this.tableId = "";
    this.seatId = "";
    this.checkId = "";
    this.userLogId = "";
    this.itemList = [];
  }

  itemTally(items) {
    this.itemList = items;
    return this.itemList;
  }
}

let userLog = new UserLog(1, 1, 1, 1, "I am the UserLog for seat 1");

userLog.itemTally(order0.orderItems); // order0.orderItems instance used in the constructor of the Products class
