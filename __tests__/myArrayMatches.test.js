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
  test("Should Match Exact Array", () => {
    expect(myArr).toEqual([10, 20, 30]);
  });

  test("Should All is Number", () => {
    for (let i = 0; i < myArr.length; i++) {
      expect(isNaN(myArr[i])).toBeFalsy();
    }
  });
  test("Should All is Number Again", () => {
    for (let i = 0; i < myArr.length; i++) {
      expect(isNaN(myArr[i])).not.toBeTruthy();
    }
  });

  test("Should First Element Greater 5", () => {
    expect(myArr[0]).toBeGreaterThan(5);
  });
  test("Should First Element Less 50", () => {
    expect(myArr[0]).toBeLessThan(50);
  });

  let obj = {
    name: "Mahmoud",
    age: 20,
  };
  test("Should Have Name Property", () => {
    expect(obj).toHaveProperty("name");
  });
  test("Should Have Name Property Mahmoud", () => {
    expect(obj).toHaveProperty("name", "Mahmoud");
  });
});
