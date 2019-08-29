class OrderDB {
  constructor() {
    this.arrDB = [];
  }

  growDB(arr1) {
    this.arrDB.push(arr1);
  }
}

const tempDB = new OrderDB();
