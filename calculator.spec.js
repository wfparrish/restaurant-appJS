describe("calculator.js", function() {
  it("should display a Daily Special in UserLog's view", function() {
    let calculator = new Calculator();
    calculator.displayDataInUserLog();
    console.log(calculator);
    expect(document.getElementById("logInfo").innerHTML).toBe(
      "<p>You should try our " +
        "<br />" +
        "<br />" +
        calculator.myArr0[0] +
        "<br /> " +
        calculator.myArr0[1] +
        "<br /> " +
        calculator.myArr0[2] +
        "<br /> " +
        "<br /> " +
        "We know how to do this dicknose!</p>"
    );
  });

  it("should display the first order in UserLog's view", function() {
    let calculator = new Calculator();
    calculator.passDataToUserLog();

    expect(document.getElementById("logInfo").innerHTML).toBe(
      "<p>Wasn't that some bomb-ass food?" +
        "<br />" +
        " You ate: " +
        "<br />" +
        "<br />" +
        userLog.itemList[0] +
        "<br /> " +
        userLog.itemList[1] +
        "<br /> " +
        userLog.itemList[2] +
        "<br /> " +
        "<br /> See ya soon bitch!</p>"
    );
  });
});
