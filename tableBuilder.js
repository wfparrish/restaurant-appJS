let assignedTable;

function tableBuilder() {
  let table0 = new Table(
    1,
    party,
    seatArray,
    checkArray,
    orderArray,
    userLogArray
  );
  console.log(table0);
  return table0;
}

assignedTable = new tableBuilder();
console.log(assignedTable);
