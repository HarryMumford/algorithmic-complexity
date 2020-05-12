import arrayFunctions from "../constants/array-functions"

import genArrays from "../helpers/input-array-generator"

const l = console.log

export default function timings(funcName, quantity, increment) {
	const arrays = genArrays(quantity, increment)

	var timings = []

	const testFunction = arrayFunctions[`${funcName}`]

	arrays.forEach(arr => {
		var t0 = performance.now()
		testFunction(arr)
		var t1 = performance.now()
		const time = t1 - t0
		timings.push({ x: arr.length, y: time })
	})

	l(timings)

	return timings
}
