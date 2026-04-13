const myArr = require("../myArrayToMatches");

describe("Testing On Array My Matches", () => {
  test("Should Contain 10", () => {
    expect(myArr).toContain(10);
  });
  test("Should Have Length 3", () => {
    expect(myArr).toHaveLength(3);
  });
  test("Should Not Contain 90", () => {
    expect(myArr).not.toContain(90);
  });
  test("Should Not Have 40 As First Element", () => {
    expect(myArr[0]).toBe(10);
  });
  test("should match exact array", () => {
    expect(myArr).toEqual([10, 20, 30]);
  });
});
