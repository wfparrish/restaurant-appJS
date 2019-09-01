class Party {
  constructor(partyId, partySize, partyMembers, partyChecks) {
    this.partyId = partyId;
    this.partySize = partySize; //a value used to set up a party
    this.partyMembers = []; //an array of seatIds
    this.partyChecks = []; //an array of Checks associated with each seat and it's userLog information
  }
}
