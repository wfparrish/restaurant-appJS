class OrderDB {
  constructor() {
    this.arrDB = [];
  }

  growDB(arr1) {
    this.arrDB.push(arr1);
    console.log(this.arrDB);
  }
}

const tempDB = new OrderDB();
