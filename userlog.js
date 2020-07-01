class UserLog {
  constructor(userLogId, tableId, checkId, seatId, userLogInfo) {
    this.userLogId = userLogId;
    this.tableId = tableId;
    this.checkId = checkId;
    this.seatId = seatId;
    this.userLogInfo = userLogInfo; //where I put messages to the user, such as "Have a happy day from Happy Burger!!!"
    this.itemList = []; //the items that have been selected by the user
    this.previousTotal = null;
  }

  //clears the userLog state of data
  refreshUserLogItemList(seatState) {
    console.log(itemList);
    this.itemList = [];
  }

  itemTally(items) {
    this.itemList = items;
    return this.itemList;
  }

  presentUserLog(seatState) {
    if (seatState.currentOrder[0] !== undefined) debugger;
    seatState.userLog.itemList.push(
      seatState.currentOrder[seatState.currentOrder.length - 1]
    );
    console.log(seatState.currentOrder[0]["orderItems"]);
    if (this.previousTotal == null) {
      document.getElementById("logInfo").innerHTML =
        "<h1>" +
        "Seat " +
        seatState.seatId +
        "</h1>" +
        "<p>Wow Hon... you real hungry ain't you?" +
        "<br />" +
        "<br />" +
        " You fittin to smash: " +
        "<br />" +
        "<br />" +
        seatState.userLog.itemList.map((item) => {
          //console.log(seatState.userLog.itemList[this.itemList.length - 1]);
          //console.log(seatState.currentOrder[0].orderItems[0]);
          console.log(item.orderItems);
          calc1.addition(item); //these are product displays with menuItems inside
          let itemView = document.createElement("div");
          itemView.id = "itemView";
          itemView.innerText =
            item.orderItems[0].menuItem.name +
            "   " +
            item.orderItems[0].menuItem.price;
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
      this.previousTotal = calc1.total;
      calc1.total = 0;
    } else {
      document.getElementById("logInfo").innerHTML =
        "<h1>" +
        "Seat " +
        seatState.seatId +
        "</h1>" +
        "<p>Still hungry huh? Save room for dessert, but order some more!!!" +
        "<br />" +
        "<br />" +
        " You fittin to smash: " +
        "<br />" +
        "<br />" +
        seatState.userLog.itemList.map((item) => {
          calc1.addition(item); //these are product displays with menuItems inside
          let itemView = document.createElement("div");
          itemView.id = "itemView";
          itemView.innerText = item.name + "   " + item.price;
          return itemView.innerText;
        }) +
        "<br /> " +
        "<br /> " +
        " Your total for this order will be: " +
        calc1.total +
        "<br /> " +
        "<br /> " +
        "<br /> " +
        "<button class='sendOrderBtn' onclick='seatState.createOrder()'>Send Order</button>" +
        "<br /> " +
        "<br /> " +
        "See you soon you wacky next-door neighbor dude!!!";
      ("</p>");

      this.previousTotal = calc1.total;
      calc1.total = 0;
    }
  }
}
