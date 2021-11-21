import data from "../../data/courses.json";

const numItems = data.length;

test("Number of items = 12", () => {
  expect(numItems).toBe(12);
});

test("Number of items to be greater than  or equal 12", () => {
  expect(numItems).toBeGreaterThanOrEqual(12);
});

//test for string

const dataTest = data[0].title;

test("There is a JS in this title", () => {
  expect(dataTest).toMatch(/JS/);
});

test("Title contains React", () => {
  expect(dataTest).toContain("React"); // expected to fail. Change to React and should pass
});

//Arrays

const data2 = ["React Native", "React"];

test("The list of courses contains React Native and React", () => {
  expect(["React Native", "React", "MeteorJS"]).toEqual(
    expect.arrayContaining(data2)
  );
});

//Objects

test("The first course to have a property title", () => {
  expect(data[0]).toHaveProperty("title");
});

test("The first course to have a property title andvalue of 31,266", () => {
  expect(data[0]).toHaveProperty("views", "31,266");
});
