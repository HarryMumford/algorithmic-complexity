/* App.js */
import React, { Component } from "react"
import timings from "./logic/performance"
import CanvasJSReact from "./assets/canvasjs.react"

var CanvasJSChart = CanvasJSReact.CanvasJSChart

class App extends Component {
	constructor() {
		super()
		this.data = timings("reverse", 10, 5000)
	}

	render() {
		const options = {
			title: {
				text: "Array function performance"
			},
			data: [
				{
					type: "spline",

					dataPoints: this.data
				}
			]
		}

		return (
			<div>
				<CanvasJSChart
					options={options}
					/* onRef={ref => this.chart = ref} */
				/>
				{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
			</div>
		)
	}
}

export default App
