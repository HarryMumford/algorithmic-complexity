const { performance } = require("perf_hooks")
const arrayFunctions = require("./array-functions")

genArrays = require("./input-array-generator")

const l = console.log

function timings(funcName, quantity, increment) {
	const arrays = genArrays(quantity, increment)

	var timings = {}

	const testFunction = arrayFunctions[`${funcName}`]

	arrays.forEach(arr => {
		t0 = performance.now()
		testFunction(arr)
		t1 = performance.now()
		const time = Number((t1 - t0).toPrecision(3))
		timings[`${arr.length}`] = time
	})

	return timings
}

l(timings("last", 5, 10000))
l(timings("sort", 5, 10000))
l(timings("shuffle", 5, 10000))
