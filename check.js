class Check {
  constructor() {
    this.checkId = checkId; //the id of the check
    this.checkOrdersArray = []; //the array of Order instances that belong to the check
    this.checkSeatsIncluded = []; //the users who have selected to be on one check
    this.total = total;
    this.status = status; //is the check open or closed?
  }
}
