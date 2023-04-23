
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 100000, years: 10, rate: 3};
  const result = calculateMonthlyPayment(values);
  expect(result).toEqual("965.61");
});


it("should return a result with 2 decimal places", function() {
  const values = {amount: 50000, years: 5, rate: 2.5};
  const result = calculateMonthlyPayment(values);
  const resultArr = result.split(".");
  expect(resultArr[1].length).toEqual(2);
});

/// etc
