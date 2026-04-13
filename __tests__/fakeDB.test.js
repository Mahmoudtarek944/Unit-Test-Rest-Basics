// Demonstrating beforeEach, beforeAll, afterAll usage
let users;

// Runs once before all tests
beforeAll(() => {
  console.log("Connect to DB");
});
// Runs before each test
beforeEach(() => {
  users = ["Mahmoud", "Tarek", "Eid"];
});
// Runs once after all tests
afterAll(() => {
  console.log("Disconnect from DB");
});

describe("User Tests", () => {
  test("Should Add a New User", () => {
    users.push("Ali");
    expect(users.length).toBe(4);
  });
  test("Should Remove a User", () => {
    users.pop();
    expect(users.length).toBe(2);
  });
  test("Should Start Fresh Every Test", () => {
    expect(users.length).toBe(3);
  });
});
