class Table {
  constructor(tableId, party, seatArray, checkArray, orderArray, userLogArray) {
    this.tableId = tableId;
    this.party = party;
    this.seatArray = seatArray; //the array of seats that are part of the Table instance
    this.checkArray = checkArray; //the array of checks that are part of the Table instance
    this.orderArray = orderArray; //the array of orders that were placed by party members
    this.userLogArray = userLogArray; //the array of logs that are connected to seats
  }
}
let table0 = new Table(
  1,
  party1,
  [seatArray],
  [check1],
  [orderArray],
  [userLogArray]
);
