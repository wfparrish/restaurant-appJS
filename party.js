class Party {
  constructor(partyId, partySize, partyMembers, partyChecks) {
    this.partyId = partyId;
    this.partySize = partySize; //a value used to set up a party
    this.partyMembers = partyMembers; //an array of seatIds
    this.partyChecks = partyChecks; //an array of Checks associated with each party
  }
}

let party1 = new Party(
  1,
  5,
  [seat1.seatId, seat2.seatId, seat3.seatId, seat4.seatId, seat5.seatId],
  [check1]
);
