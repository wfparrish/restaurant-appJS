class UserLog {
  constructor(logId, seatNum, logInfo) {
    this.logId = logId;
    this.seatNum = seatNum;
    this.logInfo = logInfo;
    this.itemList = [];
  }

  //clears the userLog state of data
  refreshUserLog() {
    this.logId = "";
    this.seatNum = "";
    this.logInfo = "";
    this.itemList = "";
  }

  itemTally(items) {
    this.itemList = items;
    return this.itemList;
  }
}

let userLog = new UserLog(1, 1, "I am the UserLog for seat 1");

userLog.itemTally(order0.orderItems); // order0.orderItems instance used in the constructor of the Products class
