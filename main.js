//menu.js, order.js
let chix0 = new Chicken((this.price = 3.59));
let sides0 = new Sides((this.price = 1.75));
let drink0 = new Drink((this.price = 1.75));
let burger1 = new Burger((this.price = 3.89));
let fries1 = new Fries((this.price = 0.99));
let milkshake1 = new Milkshake((this.price = 2.99));

//productDisplay.js, order.js
let chixDisplay = new ProductDisplay(chix0);
let sidesDisplay = new ProductDisplay(sides0);
let drinkDisplay = new ProductDisplay(drink0);
let burgerDisplay = new ProductDisplay(burger1);
let friesDisplay = new ProductDisplay(fries1);
let milkshakeDisplay = new ProductDisplay(milkshake1);

//order.js
let initialVals = [
  chixDisplay.menuItem,
  sidesDisplay.menuItem,
  drinkDisplay.menuItem
];
let order0 = new Order(0, initialVals);

let orderTally1 = [burgerDisplay, friesDisplay, milkshakeDisplay];

let orderTally2 = [sidesDisplay, drinkDisplay];

let orderTally3 = [chixDisplay, friesDisplay, drinkDisplay];

let orderTally4 = [burgerDisplay, milkshakeDisplay];

let orderTally5 = [drinkDisplay];

let order1 = new Order(1, orderTally1);
let order2 = new Order(2, orderTally2);
let order3 = new Order(3, orderTally3);
let order4 = new Order(4, orderTally4);
let order5 = new Order(5, orderTally5);

//Arbitrarily sized orderArray. Made of multiple randomly selected order objects
let orderArray = [
  order1,
  order2,
  order3,
  order4,
  order5,
  order2,
  order3,
  order1
];

//orderDB.js
//Create a tempDB using the class OrderDB
let tempDB = new OrderDB();

//calculator.js
//Create a calc1 using the class Calculator
let calc1 = new Calculator();

//userLog.js
//Create the userLogSeatState
let userLogSeatState = new UserLog(0, 1, 1, 0);

let userLog1 = new UserLog(1, 1, 1, 1, "I am the UserLog for seat 1");
let userLog2 = new UserLog(2, 1, 1, 2, "I am the UserLog for seat 2");
let userLog3 = new UserLog(3, 1, 1, 3, "I am the UserLog for seat 3");
let userLog4 = new UserLog(4, 1, 1, 4, "I am the UserLog for seat 4");
let userLog5 = new UserLog(5, 1, 1, 5, "I am the UserLog for seat 5");

userLog1.itemTally(order1.orderItems); // order0.orderItems instance used in the constructor of the Products class
userLog2.itemTally(order2.orderItems);
userLog3.itemTally(order3.orderItems);
userLog4.itemTally(order4.orderItems);
userLog5.itemTally(order5.orderItems);

let userLogArray = [
  userLogSeatState,
  userLog1,
  userLog2,
  userLog3,
  userLog4,
  userLog5
];

//dailySpecial.js
//Create the dailySpecial
let dailySpecial = new DailySpecial();

//seat.js
//Create the seatState instance
let seatState = new Seat(0, [], userLogSeatState);

let seat1 = new Seat(1, [order1], userLog1);
let seat2 = new Seat(2, [order2, order5], userLog2);
let seat3 = new Seat(3, [order5, order1], userLog3);
let seat4 = new Seat(4, [order4, order1, order4], userLog4);
let seat5 = new Seat(5, [order3, order4], userLog5);

let seatArray = [seatState, seat1, seat2, seat3, seat4, seat5];

//sets the default selected seat in the UI
seatState = seat1;

//check.js
//Create multiple checks for the table
let check1 = new Check(
  1,
  [orderArray],
  [seat1, seat2, seat3, seat4, seat5],
  0,
  "open"
);
let check2 = new Check(2, [], [], 0, "open");
let check3 = new Check(3, [], [], 0, "open");
let check4 = new Check(4, [], [], 0, "open");
let check5 = new Check(5, [], [], 0, "open");

let checkArray = [check1, check2, check3, check4, check5];

//party.js
//create a party instance
let party = new Party(1, 5, [seatArray], [check1]);

//tableBuilder.js
//create assignedTable
let assignedTable;
assignedTable = new tableBuilder((selectedSeat = null));
