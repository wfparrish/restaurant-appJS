let assignedTable;

function tableBuilder() {
  let table0 = new Table(
    1,
    party,
    seatArray,
    checkArray,
    orderArray,
    userLogArray,
    selectedSeat
  );
  return table0;
}

assignedTable = new tableBuilder((selectedSeat = seatArray[0].seatId));
console.log(assignedTable.seatArray[0].seatId);
console.log(assignedTable.seatArray[1].seatId);
console.log(assignedTable.seatArray[2].seatId);
console.log(assignedTable.seatArray[3].seatId);
console.log(assignedTable.seatArray[4].seatId);
console.log(seatState);
