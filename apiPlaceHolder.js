const api = "https://jsonplaceholder.typicode.com/users";
async function getUsers() {
  try {
    const res = await fetch(api);
    if (!res.ok) {
      throw new Error("Failed To Fetch Users");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error.message);
    return []; // rather than return undefined (silent code)
  }
}
module.exports = getUsers;
