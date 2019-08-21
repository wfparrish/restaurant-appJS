describe("index.js", function() {
  it("should pass data to the UserLog component", function() {
    let userLog = new UserLog(1, 1, "This is only a test...");
    console.log(userLog);
  });
});
