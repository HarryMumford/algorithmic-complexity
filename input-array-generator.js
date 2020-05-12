function genArray(length) {
	return Array.from({ length: length }, () =>
		Math.floor(Math.random() * length)
	)
}

function genArrays(quantity, increment) {
	const arrays = []
	var arrLength = increment

	for (let i = 0; i < quantity; i++) {
		arrays.push(genArray(arrLength))
		arrLength += increment
	}

	return arrays
}

module.exports = genArrays
