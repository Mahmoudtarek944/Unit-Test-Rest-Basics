// Check Returned API Data
const { apiObject, arrayApiObject } = require("../fakeAPI");

describe("Test API Data", () => {
  test("Should Return API Object", () => {
    expect(apiObject).toEqual(expect.anything());
  });
  test("Should Return User With Required Fields", () => {
    expect(apiObject).toEqual({
      id: expect.anything(),
      name: expect.anything(),
      age: expect.anything(),
      email: expect.anything(),
    });
  });
});

describe("Should Return Valid Required Fields", () => {
  test("Should Contain Mahmoud By Property only", () => {
    expect(arrayApiObject).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: "Mahmoud",
        }),
      ]),
    );
  });
  test("Should Contain Mahmoud Deep Equality", () => {
    expect(arrayApiObject).toEqual(
      expect.arrayContaining([{ id: 1, name: "Mahmoud" }]),
    );
  });
  test("Should Contain Mahmoud Deep Equality ,but Handel Remind Property", () => {
    expect(arrayApiObject).toEqual(
      expect.arrayContaining([
        {
          name: "Mahmoud",
          id: expect.any(Number),
        },
      ]),
    );
  });
});
