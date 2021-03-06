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
    this.orderBuilder = [];
    this.calc1 = calc1;
  }

  selectSeat(id) {
    switch (id) {
      case "seat1":
        this.selectedSeat = assignedTable.seatArray[1].seatId;
        seatState = this.seatArray[1];
        if (seatState.orderArray[0].orderItems !== undefined) {
          let index = order0.incrementId();
          let localOrderTally = seatState.orderArray[0].orderItems;
          let localOrder = new Order(index, localOrderTally);
          seatState.currentOrder[0] = localOrder;
          console.log(seatState.currentOrder[0].orderItems)
          document.getElementById("logInfo").innerHTML =
            "<h1>" +
            "Seat " +
            seatState.seatId +
            "</h1>" +
            "<p>You know you want it, right? " +
            "<br />" +
            "<br />" +
            " Just hit the order button! " +
            "<br />" +
            "<br />" +
            seatState.currentOrder.map((item, idx) => {
              this.calc1.addition(item);
              this.orderBuilder.push(item);
              let itemView = document.createElement("div");
              itemView.id = "itemView";
              itemView.innerText =
              item['orderItems'][idx]['menuItem']['name'] + "   " + 
              item['orderItems'][idx]['menuItem']['price'];
              return itemView.innerText;
            }) +
            "<br /> " +
            "<br /> " +
            " Your total will be: " +
            this.calc1.total +
            "<br /> " +
            "<br /> " +
            "<br /> " +
            "<button class='sendOrderBtn' onclick='seatState.createOrder()'>Send Order</button>" +
            "<br /> " +
            "<br /> " +
            "See you soon you wacky next-door neighbor dude!!!";
          ("</p>");
          seatState.orderArray[0].orderItems = this.orderBuilder;
          this.orderBuilder = [];
        }
        this.calc1.total = 0;
        this.seatArray[1] = seatState;
        this.calc1.clearCalculator();
        break;

      case "seat2":
        this.selectedSeat = assignedTable.seatArray[2].seatId;
        seatState = this.seatArray[2];
        if (seatState.orderArray[0].orderItems !== undefined) {
          let index = order0.incrementId();
          let localOrderTally = seatState.orderArray[0].orderItems;
          let localOrder = new Order(index, localOrderTally);
          seatState.currentOrder[0] = localOrder;
          document.getElementById("logInfo").innerHTML =
            "<h1>" +
            "Seat " +
            seatState.seatId +
            "</h1>" +
            "<p>You know you want it, right? " +
            "<br />" +
            "<br />" +
            " Just hit the order button! " +
            "<br />" +
            "<br />" +
            seatState.currentOrder[0].orderItems.map(item => {
              this.calc1.addition(item);
              this.orderBuilder.push(item);
              let itemView = document.createElement("div");
              itemView.id = "itemView";
              itemView.innerText =
                item.menuItem.name + "   " + item.menuItem.price;
              return itemView.innerText;
            }) +
            "<br /> " +
            "<br /> " +
            " Your total will be: " +
            this.calc1.total +
            "<br /> " +
            "<br /> " +
            "<br /> " +
            "<button class='sendOrderBtn' onclick='seatState.createOrder()'>Send Order</button>" +
            "<br /> " +
            "<br /> " +
            "See you soon you wacky next-door neighbor dude!!!";
          ("</p>");
          seatState.orderArray[0].orderItems = this.orderBuilder;
          this.orderBuilder = [];
        }
        this.calc1.total = 0;
        this.seatArray[2] = seatState;
        this.calc1.clearCalculator();
        break;

      case "seat3":
        this.selectedSeat = assignedTable.seatArray[3].seatId;
        seatState = this.seatArray[3];
        if (seatState.orderArray[0].orderItems !== undefined) {
          let index = order0.incrementId();
          let localOrderTally = seatState.orderArray[0].orderItems;
          let localOrder = new Order(index, localOrderTally);
          seatState.currentOrder[0] = localOrder;
          document.getElementById("logInfo").innerHTML =
            "<h1>" +
            "Seat " +
            seatState.seatId +
            "</h1>" +
            "<p>You know you want it, right? " +
            "<br />" +
            "<br />" +
            " Just hit the order button! " +
            "<br />" +
            "<br />" +
            seatState.currentOrder[0].orderItems.map(item => {
              this.calc1.addition(item);
              this.orderBuilder.push(item);
              let itemView = document.createElement("div");
              itemView.id = "itemView";
              itemView.innerText =
                item.menuItem.name + "   " + item.menuItem.price;
              return itemView.innerText;
            }) +
            "<br /> " +
            "<br /> " +
            " Your total will be: " +
            this.calc1.total +
            "<br /> " +
            "<br /> " +
            "<br /> " +
            "<button class='sendOrderBtn' onclick='seatState.createOrder()'>Send Order</button>" +
            "<br /> " +
            "<br /> " +
            "See you soon you wacky next-door neighbor dude!!!";
          ("</p>");
          seatState.orderArray[0].orderItems = this.orderBuilder;
          this.orderBuilder = [];
        }
        this.calc1.total = 0;
        this.seatArray[3] = seatState;
        this.calc1.clearCalculator();
        break;

      case "seat4":
        this.selectedSeat = assignedTable.seatArray[4].seatId;
        seatState = this.seatArray[4];
        if (seatState.orderArray[0].orderItems !== undefined) {
          let index = order0.incrementId();
          let localOrderTally = seatState.orderArray[0].orderItems;
          let localOrder = new Order(index, localOrderTally);
          seatState.currentOrder[0] = localOrder;
          document.getElementById("logInfo").innerHTML =
            "<h1>" +
            "Seat " +
            seatState.seatId +
            "</h1>" +
            "<p>You know you want it, right? " +
            "<br />" +
            "<br />" +
            " Just hit the order button! " +
            "<br />" +
            "<br />" +
            seatState.currentOrder[0].orderItems.map(item => {
              this.calc1.addition(item);
              this.orderBuilder.push(item);
              let itemView = document.createElement("div");
              itemView.id = "itemView";
              itemView.innerText =
                item.menuItem.name + "   " + item.menuItem.price;
              return itemView.innerText;
            }) +
            "<br /> " +
            "<br /> " +
            " Your total will be: " +
            this.calc1.total +
            "<br /> " +
            "<br /> " +
            "<br /> " +
            "<button class='sendOrderBtn' onclick='seatState.createOrder()'>Send Order</button>" +
            "<br /> " +
            "<br /> " +
            "See you soon you wacky next-door neighbor dude!!!";
          ("</p>");
          seatState.orderArray[0].orderItems = this.orderBuilder;
          this.orderBuilder = [];
        }
        this.calc1.total = 0;
        this.seatArray[4] = seatState;
        this.calc1.clearCalculator();
        break;

      case "seat5":
        this.selectedSeat = assignedTable.seatArray[5].seatId;
        seatState = this.seatArray[5];
        if (seatState.orderArray[0].orderItems !== undefined) {
          let index = order0.incrementId();
          let localOrderTally = seatState.orderArray[0].orderItems;
          let localOrder = new Order(index, localOrderTally);
          seatState.currentOrder[0] = localOrder;
          document.getElementById("logInfo").innerHTML =
            "<h1>" +
            "Seat " +
            seatState.seatId +
            "</h1>" +
            "<p>You know you want it, right? " +
            "<br />" +
            "<br />" +
            " Just hit the order button! " +
            "<br />" +
            "<br />" +
            seatState.currentOrder[0].orderItems.map(item => {
              this.calc1.addition(item);
              this.orderBuilder.push(item);
              let itemView = document.createElement("div");
              itemView.id = "itemView";
              itemView.innerText =
                item.menuItem.name + "   " + item.menuItem.price;
              return itemView.innerText;
            }) +
            "<br /> " +
            "<br /> " +
            " Your total will be: " +
            this.calc1.total +
            "<br /> " +
            "<br /> " +
            "<br /> " +
            "<button class='sendOrderBtn' onclick='seatState.createOrder()'>Send Order</button>" +
            "<br /> " +
            "<br /> " +
            "See you soon you wacky next-door neighbor dude!!!";
          ("</p>");
          seatState.orderArray[0].orderItems = this.orderBuilder;
          this.orderBuilder = [];
        }
        this.calc1.total = 0;
        this.seatArray[5] = seatState;
        this.calc1.clearCalculator();
        break;

      default:
        break;
    }
  }
}
