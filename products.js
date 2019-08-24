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
    this.selectedProd = document.getElementById(id);
    this.display = "";
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
    this.myArrProducts.push(this.display);
    this.viewBuilder = this.myArrProducts;
    console.log(productBox.viewBuilder);
    userLog.itemTally(productBox.viewBuilder);
    document.getElementById("logInfo").innerHTML =
      "<p>Wasn't that some bomb-ass food?" +
      "<br />" +
      " You ate: " +
      "<br />" +
      "<br />" +
      userLog.itemList.map(item => {
        let itemView = document.createElement("div");
        itemView.id = "itemView";
        itemView.innerText = item.menuItem.name;
        console.log(itemView);
        return itemView;
      }) +
      "<br /> " +
      "<br /> See ya soon bitch!</p>";
    console.log(userLog.itemList);
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
