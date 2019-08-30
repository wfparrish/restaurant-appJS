class OrderDB {
  constructor() {
    this.arrDB = [];
  }

  growDB(arr1) {
    this.arrDB.push(arr1);
  }
}

let tempDB = new OrderDB();
