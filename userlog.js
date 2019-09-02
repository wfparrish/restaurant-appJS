class UserLog {
  constructor(userLogId, table, check, seat, userLogInfo) {
    this.userLogId = userLogId;
    this.tableId = table.tableId;
    this.checkId = check.checkId;
    this.seatId = seat.seatId;
    this.userLogInfo = userLogInfo; //where I put messages to the user, such as "Have a happy day from Happy Burger!!!"
    this.itemList = []; //the items that have been selected by the user
  }

  //clears the userLog state of data
  refreshUserLog() {
    this.userLogId = "";
    this.tableId = "";
    this.checkId = "";
    this.seatId = "";
    this.userLogInfo = "";
    this.itemList = [];
  }

  itemTally(items) {
    this.itemList = items;
    return this.itemList;
  }
}

let userLog1 = new UserLog(1, 1, 1, 1, "I am the UserLog for seat 1");
let userLog2 = new UserLog(1, 1, 1, 2, "I am the UserLog for seat 2");
let userLog3 = new UserLog(1, 1, 1, 3, "I am the UserLog for seat 3");
let userLog4 = new UserLog(1, 1, 1, 4, "I am the UserLog for seat 4");
let userLog5 = new UserLog(1, 1, 1, 5, "I am the UserLog for seat 5");

userLog1.itemTally(order0.orderItems); // order0.orderItems instance used in the constructor of the Products class
