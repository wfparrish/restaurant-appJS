class Seat {
  constructor(seatId, orderArray, userLog) {
    this.seatId = seatId; //the id of the user's seat
    this.orderArray = orderArray; //an array of orders associated with the Seat instance
    this.userLog = userLog; //the userLog instance associated with a seat
    this.viewBuilder = [];
    this.myArrProducts = [];
    this.currentOrder = "";
  }

  passDataToUserLog(id) {
    let calc1 = new Calculator();
    this.selectedProd = document.getElementById(id);
    this.display = "";
    //creates a menu item and puts it in a product display object
    switch (id) {
      case "addMeBtn1":
        this.selectedProd = new Burger();
        this.display = new ProductDisplay(this.selectedProd);
        break;
      case "addMeBtn2":
        this.selectedProd = new Fries();
        this.display = new ProductDisplay(this.selectedProd);
        break;
      case "addMeBtn3":
        this.selectedProd = new Milkshake();
        this.display = new ProductDisplay(this.selectedProd);
        break;
      case "addMeBtn4":
        this.selectedProd = new Chicken();
        this.display = new ProductDisplay(this.selectedProd);
        break;
    }
    //creates an array of product displays and shows the content of the product displays in the userLog view
    this.myArrProducts.push(this.display);
    //console.log(this.myArrProducts);
    this.viewBuilder = this.myArrProducts;
    userLog1.itemTally(seatState.viewBuilder);
    //console.log(userLog.itemTally(productBox.viewBuilder));
    document.getElementById("logInfo").innerHTML =
      "<p>Wow Hon... you real hungry ain't you?" +
      "<br />" +
      "<br />" +
      " You fittin to smash: " +
      "<br />" +
      "<br />" +
      //Note to self: 9/2/2019
      //Put this method in the Userlog class, but call it here through the Seat instance
      //table0.seatArray.seat.userLog.blahblahblah
      userLog1.itemList.map(item => {
        calc1.addition(item.menuItem);
        //creates a div for each menu item that shows name and price
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

    //clear the viewBuilder
    //this.viewBuilder = [];
    return this.viewBuilder;
  }

  createOrder(index = order0.incrementId()) {
    //creates an array with product display items. It appears to have scope of the lifetime of the function

    let localViewBuilder = this.viewBuilder;
    this.currentOrder = new Order(index, localViewBuilder);
    //passes the order to the orderArray in the Table class instance
    assignedTable.seatArray[0].orderArray = this.currentOrder;

    //
    console.log(assignedTable.seatArray);
    tempDB.growDB(this.currentOrder.orderItems);
    this.viewBuilder = [];
    return this.viewBuilder;
  }
}

let seat1 = new Seat(1, [order1], userLog1);
let seat2 = new Seat(2, [order2, order5], userLog2);
let seat3 = new Seat(3, [order5, order1], userLog3);
let seat4 = new Seat(4, [order4, order1, order4], userLog4);
let seat5 = new Seat(5, [order3, order4], userLog5);

let seatArray = [seat1, seat2, seat3, seat4, seat5];
let seatState = new Seat();
