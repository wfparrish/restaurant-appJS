class Party {
  constructor(partyId, partySize, partyMembers, partyChecks) {
    this.partyId = partyId;
    this.partySize = partySize; //a value used to set up a party
    this.partyMembers = partyMembers; //an array of seatIds
    this.partyChecks = partyChecks; //an array of Checks associated with each party
  }
}

let party1 = new Party(1, 5, [seatArray], [check1]);
