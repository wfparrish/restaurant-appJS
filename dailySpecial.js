class DailySpecial {
  constructor() {
    this.myArr0 = [
      order0.orderItems[0],
      order0.orderItems[1],
      order0.orderItems[2]
    ];
  }

  displayDataInUserLog() {
    //Populates the UserLog view using myArr0
    document.getElementById("logInfo").innerHTML =
      "<p>You should try our " +
      "<br />" +
      "<br />" +
      this.myArr0[0].name +
      "<br /> " +
      this.myArr0[1].name +
      "<br /> " +
      this.myArr0[2].name +
      "<br /> " +
      "<br /> " +
      "We know how to do this! Sunny side up!</p>";
  }
}

let dailySpecial = new DailySpecial();
