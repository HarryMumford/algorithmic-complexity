class ArraySet {
	constructor(quantity, increment) {
		this.quantity = quantity
		this.increment = increment
		this.arrays = this.genArrays(quantity, increment)
	}

	genArray(length) {
		return Array.from({ length: length }, () =>
			Math.floor(Math.random() * length)
		)
	}

	genArrays(quantity, increment) {
		const arrays = []
		this.arrLength = increment

		for (let i = 0; i < quantity; i++) {
			arrays.push(this.genArray(this.arrLength))
			this.arrLength += increment
		}

		return arrays
	}
}

export default ArraySet
