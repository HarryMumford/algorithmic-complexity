const arrayFunctions = {
	reverse: array => {
		return array.reverse()
	},
	last: array => {
		return array[array.length - 1]
	},
	shuffle: array => {
		var currentIndex = array.length,
			temporaryValue,
			randomIndex

		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex)
			currentIndex -= 1

			temporaryValue = array[currentIndex]
			array[currentIndex] = array[randomIndex]
			array[randomIndex] = temporaryValue
		}

		return array
	},
	sort: array => {
		return array.sort()
	}
}

module.exports = arrayFunctions
