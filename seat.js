class Seat {
  constructor(seatId, userLog) {
    this.seatId = seatId; //the id of the user's seat
    this.userLog = userLog; //the userLog instance associated with a seat
  }
}

let seat1 = new Seat(1, userLog1);
let seat2 = new Seat(2, userLog2);
let seat3 = new Seat(3, userLog3);
let seat4 = new Seat(4, userLog4);
let seat5 = new Seat(5, userLog5);

let seatArray = [seat1, seat2, seat3, seat4, seat5];
