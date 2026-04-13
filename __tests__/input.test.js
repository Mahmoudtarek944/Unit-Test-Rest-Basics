//  Basic Test using test , describe on user name
const nameTest = require("../input");

describe("Testing On The Name ", () => {
  test("Should Return The Same Name If Valid", () => {
    expect(nameTest("Mahmoud")).toBe("Mahmoud");
  });
  test("Should Return 'Unknown' If Name Is undefined", () => {
    expect(nameTest()).toBe("Unknown");
  });
  test("Should Return 'Unknown' If Name Is Empty", () => {
    expect(nameTest("")).toBe("Unknown");
  });
  test("Should Remove Leading Underscores", () => {
    expect(nameTest("_Mahmoud")).toBe("Mahmoud");
  });
  test("Should Truncate Name If Longer Than 10 Characters", () => {
    expect(nameTest("Mahmoud Tarek Eid")).toBe("Mahmoud Ta");
  });
  test("Should Remove Underscores Then Truncate If Needed", () => {
    expect(nameTest("_MahmoudTarekEid")).toBe("MahmoudTar");
  });
  test("Should Remove Leading Underscores", () => {
    expect(nameTest("_______")).toBe("Unknown");
  });
});
