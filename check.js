class Check {
  constructor(checkId, checkOrdersArray, checkSeatsIncluded, total, status) {
    this.checkId = checkId; //the id of the check
    this.checkOrdersArray = checkOrdersArray; //the array of Order instances that belong to the check
    this.checkSeatsIncluded = checkSeatsIncluded; //the users who have selected to be on one check
    this.total = total;
    this.status = status; //is the check open or closed?
  }
}

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
