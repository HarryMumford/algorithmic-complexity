export default function myReverse(array) {
  var newArray = []
  for (let i = array.length; i > 0; i--) {
    newArray.push(array[i - 1])
  }
  return newArray
}
