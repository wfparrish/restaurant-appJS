class Products {
  constructor() {
    this.viewBuilder = [];
    this.myArrProducts = [];
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
        console.log(itemView);
        // let content = document.createTextNode(item.menuItem.name);
        // itemView.appendChild(content);
        // document.getElementById("itemView").innerHTML =
        //   "<div>" + content + "</div>";

        // console.log(content);
        return itemView;
      }) +
      "<br /> " +
      "<br /> See ya soon bitch!</p>";
    console.log(userLog.itemList);

    //Instead of splitting the array, I decided to use the nature of divs(block elements) to get info on new lines. this is way off, but the elements do print line-by-line. I need to create a new div with each click, instead of sending an array
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

//I should be able to use the Order class to start to create ProductDisplay methods. We should be using parts from the order.js file

//ex. single instances of desired Menu items should be connected one-to-one to ProductDisplay instances, and be created when the passToUserLog() method is triggered. Something like that.

//The order class should be modified to serve as
//a data store for all orders placed. Could use a 2D array, storing each collection of items as an array in an allOrders array
