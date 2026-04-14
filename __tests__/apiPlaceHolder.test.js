const getUsers = require("../apiPlaceHolder");

describe("Should Return Users When Fetch Is Successful", () => {
  test("Success Case", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve([{ id: 1, name: "Mahmoud" }]),
      }),
    );
    const data = await getUsers();
    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(data).toEqual([{ id: 1, name: "Mahmoud" }]);
  });

  test("Should Return Empty Array When Response Is Not Ok", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      }),
    );
    const data = await getUsers();
    expect(data).toEqual([]);
  });

  test("Should Return Empty Array When Fetch Fails", async () => {
    global.fetch = jest.fn(() => Promise.reject("Network error"));
    const data = await getUsers();
    expect(data).toEqual([]);
  });
});
