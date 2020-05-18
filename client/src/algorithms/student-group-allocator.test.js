import allocateGroups from "./student-group-allocator"

test("Given 1 name and 1 group return 1 group containing 1 name", () => {
  expect(allocateGroups(["Bob"], 1)).toEqual([["Bob"]])
})

test("Given 2 names and 2 groups return 2 groups containing 1 name", () => {
  expect(allocateGroups(["Bob", "Ruby"], 2)).toEqual([["Bob"], ["Ruby"]])
})

test("Given 3 names and 3 groups return 3 groups containing 1 name", () => {
  expect(allocateGroups(["Bob", "Ruby", "Jess"], 3)).toEqual([
    ["Bob"],
    ["Ruby"],
    ["Jess"]
  ])
})

test("Given 2 names and 1 group return 1 group containing 2 names", () => {
  expect(allocateGroups(["Bob", "Ruby"], 1)).toEqual([["Bob", "Ruby"]])
})

test("Given 4 names and 2 groups return 2 groups containing 2 names", () => {
  expect(allocateGroups(["Bob", "Ruby", "Jess", "Cam"], 2)).toEqual([
    ["Bob", "Jess"],
    ["Ruby", "Cam"]
  ])
})

test("Given 3 names and 2 groups return 2 groups containing 2 names and 1 name", () => {
  expect(allocateGroups(["Bob", "Ruby", "Jess"], 2)).toEqual([
    ["Bob", "Jess"],
    ["Ruby"]
  ])
})

test("Given 5 names and 3 groups return 3 groups containing 2 names, 2 names and 1 name", () => {
  expect(allocateGroups(["Bob", "Ruby", "Jess", "Cam", "Ben"], 3)).toEqual([
    ["Bob", "Cam"],
    ["Ruby", "Ben"],
    ["Jess"]
  ])
})
