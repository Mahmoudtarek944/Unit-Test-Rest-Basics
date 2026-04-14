const { arr, obj } = require("../arrayMatches");

describe("Testing On Array My Matches", () => {
  test("Should Contain 10", () => {
    expect(arr).toContain(10);
  });
  test("Should Have Length 3", () => {
    expect(arr).toHaveLength(3);
  });
  test("Should Not Contain 90", () => {
    expect(arr).not.toContain(90);
  });
  test("Should Not Have 40 As First Element", () => {
    expect(arr[0]).toBe(10);
  });
  test("Should Match Exact Array", () => {
    expect(arr).toEqual([10, 20, 30]);
  });

  // To Improve Readability : use forEach /every rather than for loop normally
  test("Should Contain Only Number", () => {
    arr.forEach((val) => {
      expect(val.constructor.name).toBe("Number");
    });
  });
  test("Should Contain Only Number", () => {
    arr.every((val) => {
      expect(val.constructor.name === "Number").toBe(true);
    });
  });

  test("Should First Element Greater 5", () => {
    expect(arr[0]).toBeGreaterThan(5);
  });
  test("Should First Element Less 50", () => {
    expect(arr[0]).toBeLessThan(50);
  });
});

describe("Test Object ", () => {
  test("Should Have Name Property", () => {
    expect(obj).toHaveProperty("name");
  });
  test("Should Have Name Property Mahmoud", () => {
    expect(obj).toHaveProperty("name", "Mahmoud");
  });
});

describe("Test Expect Cases ", () => {
  test("Expect Anything -- not null / not undefind", () => {
    arr.forEach((val) => {
      expect(val).toEqual(expect.anything());
    });
  });

  test("Should Contain Numbers", () => {
    let fakeArr = [10, 20];
    expect(arr).toEqual(expect.arrayContaining(fakeArr));
  });
});
