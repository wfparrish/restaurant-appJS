class UserLog {
  constructor(userLogId, tableId, checkId, seatId, userLogInfo) {
    this.userLogId = userLogId;
    this.tableId = tableId;
    this.checkId = checkId;
    this.seatId = seatId;
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

  presentUserLog() {
    document.getElementById("logInfo").innerHTML =
      "<p>Wow Hon... you real hungry ain't you?" +
      "<br />" +
      "<br />" +
      " You fittin to smash: " +
      "<br />" +
      "<br />" +
      userLog1.itemList.map(item => {
        calc1.addition(item); //these are product displays with menuItems inside
        let itemView = document.createElement("div");
        itemView.id = "itemView";
        itemView.innerText = item.menuItem.name + "   " + item.menuItem.price;
        return itemView.innerText;
      }) +
      "<br /> " +
      "<br /> " +
      " Your total will be: " +
      calc1.total +
      "<br /> " +
      "<br /> " +
      "<br /> " +
      "<button class='sendOrderBtn' onclick='seatState.createOrder()'>Send Order</button>" +
      "<br /> " +
      "<br /> " +
      "See you soon you wacky next-door neighbor dude!!!";
    ("</p>");
  }
}

let userLog1 = new UserLog(1, 1, 1, 1, "I am the UserLog for seat 1");
let userLog2 = new UserLog(2, 1, 1, 2, "I am the UserLog for seat 2");
let userLog3 = new UserLog(3, 1, 1, 3, "I am the UserLog for seat 3");
let userLog4 = new UserLog(4, 1, 1, 4, "I am the UserLog for seat 4");
let userLog5 = new UserLog(5, 1, 1, 5, "I am the UserLog for seat 5");

userLog1.itemTally(order0.orderItems); // order0.orderItems instance used in the constructor of the Products class
let userLogArray = [userLog1, userLog2, userLog3, userLog4, userLog5];
