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
    this.itemList = [];
  }

  itemTally(items) {
    this.itemList = items;
    return this.itemList;
  }

  presentUserLog(seatState) {
    //checks to see if the items ordered have already been totaled(i.e. not the first time the seat has been selected and an order placed by the user). If the order has never been totaled this is the code that runs
    if (this.previousTotal == null) {
      document.getElementById("logInfo").innerHTML =
        "<p>Wow Hon... you real hungry ain't you?" +
        "<br />" +
        "<br />" +
        " You fittin to smash: " +
        "<br />" +
        "<br />" +
        seatState.userLog.itemList.map(item => {
          calc1.addition(item); //these are product displays with menuItems inside
          let itemView = document.createElement("div");
          itemView.id = "itemView";
          itemView.innerText = item.name + "   " + item.price;
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
      // console.log(seatState);
      // seatState.refreshSeatState(seatState.seatId, seatState.userLogSeatState);
      //this.refreshUserLogItemList(seatState);
      this.previousTotal = calc1.total;
    } else {
      document.getElementById("logInfo").innerHTML =
        "<p>Still hungry huh? Save room for dessert, but order some more!!!" +
        "<br />" +
        "<br />" +
        " You fittin to smash: " +
        "<br />" +
        "<br />" +
        //the alternative that runs if this is NOT the first time the seat has been selected
        seatState.userLog.itemList.map(item => {
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
    }
  }
}
