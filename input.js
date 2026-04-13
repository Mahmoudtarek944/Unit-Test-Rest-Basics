function testName(name) {
  if (name === undefined || name.length === 0) {
    return "Unknown";
  }
  if (name.startsWith("_")) {
    while (name.startsWith("_")) {
      name = name.substring(1);
    }
    if (name.length === 0) {
      return "Unknown";
    }
  } // Not use else if because if after ignore _ from the name , the length of name also greater then 10 char
  if (name.length > 10) {
    name = name.substring(0, 10);
  }

  return name;
}
module.exports = testName;
