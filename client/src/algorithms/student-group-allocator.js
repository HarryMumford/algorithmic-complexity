// export default function allocateGroups(students, numberOfGroups) {
//   var output = []
//   if (students.length !== numberOfGroups) {
//     for (let i = 0; i < numberOfGroups; i++) {
//       output.push([])
//       const elements = students
//       output[i].push(students[i])
//     }
//   }
//   students.forEach(e => {
//     output.push([e])
//   })
//   return output
// }

export default function allocateGroups(students, numberOfGroups) {
  var output = []
  for (let i = 0; i < numberOfGroups; i++) {
    output.push([])
  }
  var currentGroup = 0
  for (let i = 0; i < students.length; i++) {
    output[currentGroup].push(students[i])
    if (currentGroup + 1 < output.length) {
      currentGroup++
    } else {
      currentGroup = 0
    }
  }
  return output
}
