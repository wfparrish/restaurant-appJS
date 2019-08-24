class Products {
  constructor() {
    this.viewBuilder = [];
    this.myArrProducts = [];
    this.myArr0 = [
      order0.orderItems[0].name,
      order0.orderItems[1].name,
      order0.orderItems[2].name
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
    this.viewBuilder = this.myArrProducts;
    userLog.itemTally(productBox.viewBuilder);
    document.getElementById("logInfo").innerHTML =
      "<p>Damn nigga... you real hungry ain't you?" +
      "<br />" +
      "<br />" +
      " You fittin to smash: " +
      "<br />" +
      "<br />" +
      userLog.itemList.map(item => {
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
      "<button class='sendOrderBtn'>Send Order</button>";
  }
}

class ProductDisplay {
  constructor(menuItem) {
    this.id = "P-d" + ProductDisplay.incrementId();
    this.menuItem = menuItem;
  }

  static incrementId() {
    if (!this.latestId) this.latestId = 1;
    else this.latestId++;
    return this.latestId;
  }
}

let productBox = new Products();
