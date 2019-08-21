class Calculator {
  constructor() {
    this.myArr0 = [
      userLog.itemList[0].name,
      userLog.itemList[1].name,
      userLog.itemList[2].name
    ];
  }

  displayDataInUserLog() {
    //Populates the UserLog view using myArr0
    document.getElementById("logInfo").innerHTML =
      "<p>You should try our " +
      "<br />" +
      "<br />" +
      this.myArr0[0] +
      "<br /> " +
      this.myArr0[1] +
      "<br /> " +
      this.myArr0[2] +
      "<br /> " +
      "<br /> " +
      "We know how to do this dicknose!</p>";
  }

  passDataToUserLog() {
    //We pass data to the UserLog, which is storing the state of the user's check data. The plan is to create a render method in the User Log
    this.myArr1 = [
      order1.orderItems[0].name,
      order1.orderItems[1].name,
      order1.orderItems[2].name
    ];
    userLog.itemTally(this.myArr1);
    document.getElementById("logInfo").innerHTML =
      "<p>Wasn't that some bomb-ass food?" +
      "<br />" +
      " You ate: " +
      "<br />" +
      "<br />" +
      userLog.itemList[0] +
      "<br /> " +
      userLog.itemList[1] +
      "<br /> " +
      userLog.itemList[2] +
      "<br /> " +
      "<br /> See ya soon bitch!</p>";

    // Clear the userLog state of data
    userLog.refreshUserLog();
    return userLog;
  }
}

let calc = new Calculator();
