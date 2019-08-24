class Table {
  constructor() {
    this.partyId = partyId;
    this.partySize = partySize;
    this.seatArray = seatArray; //will hold the seat info for each diner, and can be the basis of checks
  }
}

class Seat {
  constructor() {
    this.seatId = seatId;
  }
}

class Check {
  constructor() {
    this.checkNum = checkNum;
    this.itemArray = itemArray;
    this.seatList = seatList;
    this.total = total;
    this.status = status; //is the check open or closed?
  }
}

class Server {
  constructor() {}
}

class TableOrderQueue {
  //a list of tableOrder(s)
  constructor() {}
}

class TableOrder {
  constructor() {}
}

class EightySixList {
  constructor() {}
}

class Voids {
  constructor() {}
}
