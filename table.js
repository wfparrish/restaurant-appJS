class Table {
  constructor(
    tableId,
    party,
    seatArray,
    checkArray,
    orderArray,
    userLogArray,
    selectedSeat,
    calc1
  ) {
    this.tableId = tableId;
    this.party = party;
    this.seatArray = seatArray; //the array of seats that are part of the Table instance
    this.checkArray = checkArray; //the array of checks that are part of the Table instance
    this.orderArray = orderArray; //the array of orders that were placed by party members
    this.userLogArray = userLogArray; //the array of logs that are connected to seats'
    this.selectedSeat = selectedSeat; //the default seat or the seat selected by the user of the program
    this.calc1 = calc1;
  }

  selectSeat(id) {
    switch (id) {
      case "seat1":
        calc1.clearCalculator();

        this.selectedSeat = assignedTable.seatArray[1].seatId;
        seatState = this.seatArray[1];
        seatState.currentOrder = seatState.orderArray;
        document.getElementById("logInfo").innerHTML =
          "<h1>" +
          "Seat " +
          seatState.seatId +
          "</h1>" +
          "<p>Coming back for more eh?" +
          "<br />" +
          "<br />" +
          " You gonna gobble down: " +
          "<br />" +
          "<br />" +
          seatState.currentOrder[0].orderItems.map(item => {
            let productDisplay = new ProductDisplay(item);
            seatState.currentOrder.push(productDisplay);
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
        "</p>";
        this.calc1.total = 0;
        this.seatArray[1] = seatState;
        break;

      case "seat2":
        calc1.clearCalculator();
        this.selectedSeat = assignedTable.seatArray[2].seatId;
        //a reference to the data stored for the seat
        seatState = this.seatArray[2];
        seatState.currentOrder = seatState.orderArray;
        document.getElementById("logInfo").innerHTML =
          "<h1>" +
          "Seat " +
          seatState.seatId +
          "</h1>" +
          "<p>Coming back for more eh?" +
          "<br />" +
          "<br />" +
          " You gonna gobble down: " +
          "<br />" +
          "<br />" +
          seatState.currentOrder[0].orderItems.map(item => {
            let productDisplay = new ProductDisplay(item);
            seatState.currentOrder.push(productDisplay);
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
        "</p>";
        this.calc1.total = 0;
        this.seatArray[2] = seatState;
        break;

      case "seat3":
        calc1.clearCalculator();
        this.selectedSeat = assignedTable.seatArray[3].seatId;
        seatState = this.seatArray[3];
        seatState.currentOrder = seatState.orderArray;
        document.getElementById("logInfo").innerHTML =
          "<h1>" +
          "Seat " +
          seatState.seatId +
          "</h1>" +
          "<p>Coming back for more eh?" +
          "<br />" +
          "<br />" +
          " You gonna gobble down: " +
          "<br />" +
          "<br />" +
          seatState.currentOrder[0].orderItems.map(item => {
            let productDisplay = new ProductDisplay(item);
            seatState.currentOrder.push(productDisplay);
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
        "</p>";
        this.calc1.total = 0;
        this.seatArray[3] = seatState;
        break;

      case "seat4":
        calc1.clearCalculator();
        this.selectedSeat = assignedTable.seatArray[4].seatId;
        seatState = this.seatArray[4];
        seatState.currentOrder = seatState.orderArray;
        document.getElementById("logInfo").innerHTML =
          "<h1>" +
          "Seat " +
          seatState.seatId +
          "</h1>" +
          "<p>Coming back for more eh?" +
          "<br />" +
          "<br />" +
          " You gonna gobble down: " +
          "<br />" +
          "<br />" +
          seatState.currentOrder[0].orderItems.map(item => {
            let productDisplay = new ProductDisplay(item);
            seatState.currentOrder.push(productDisplay);
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
        "</p>";
        this.calc1.total = 0;
        this.seatArray[4] = seatState;
        break;

      case "seat5":
        calc1.clearCalculator();
        this.selectedSeat = assignedTable.seatArray[5].seatId;
        seatState = this.seatArray[5];
        seatState.currentOrder = seatState.orderArray;
        document.getElementById("logInfo").innerHTML =
          "<h1>" +
          "Seat " +
          seatState.seatId +
          "</h1>" +
          "<p>Coming back for more eh?" +
          "<br />" +
          "<br />" +
          " You gonna gobble down: " +
          "<br />" +
          "<br />" +
          seatState.currentOrder[0].orderItems.map(item => {
            let productDisplay = new ProductDisplay(item);
            seatState.currentOrder.push(productDisplay);
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
        "</p>";
        this.calc1.total = 0;
        this.seatArray[5] = seatState;
        break;

      default:
        break;
    }
  }
}
