import myReverse from "./myReverse"

test("given [1, 2] it returns [2, 1]", () => {
  expect(myReverse([1, 2])).toEqual([2, 1])
})

test("given [1, 2, 3] it returns [1, 2, 3]", () => {
  expect(myReverse([1, 2, 3])).toEqual([3, 2, 1])
})
