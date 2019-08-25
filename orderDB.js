class OrderDB {
  constructor(arr) {
    this.arrDB = arr;
  }

  growDB(arr) {
    this.arrDB.push(arr);
  }
}

tempDB = new OrderDB(productBox.viewBuilder);
