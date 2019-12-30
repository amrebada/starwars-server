import {greeting} from "../src/schemas/schema";

test("Greetings", () => {
  expect(greeting("amr")).toBe("Hello amr");
});
