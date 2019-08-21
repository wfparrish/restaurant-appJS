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
console.log(order0);
console.log(order0.orderItems);
userLog.itemTally(order0.orderItems); //items are coming from the Order class
console.log(userLog.itemList[0]);
console.log(userLog.itemList[1]);
console.log(userLog.itemList[2]);
