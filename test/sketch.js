const sum = require("../src/sketch.js");

test("1 + 2 = 3", () => {
  expect(sum(1, 2)).toBe(3);
});
