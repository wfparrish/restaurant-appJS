class OrderDB {
  constructor() {
    this.arrDB = [];
  }

  growDB(arr1) {
    this.arrDB.concat(arr1);
  }
}

let tempDB = new OrderDB();
