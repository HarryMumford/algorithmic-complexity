/* App.js */
import React, { Component } from "react"
import timings from "./logic/performance"
import CanvasJSReact from "./assets/canvasjs.react"

var CanvasJSChart = CanvasJSReact.CanvasJSChart

class App extends Component {
  constructor() {
    super()
    this.state = {
      arrayFunctions: {
        reverse: timings("reverse", 10, 5000),
        myReverse1: timings("myReverse1", 10, 5000),
        last: timings("last", 10, 5000),
        sort: timings("sort", 10, 5000),
        shuffle: timings("shuffle", 10, 5000)
      }
    }
  }

  render() {
    const options = {
      title: {
        text: "Array function performance"
      },
      data: [
        {
          type: "spline",
          showInLegend: true,
          name: "myReverse1",
          dataPoints: this.state.arrayFunctions.myReverse1
        },
        {
          type: "spline",
          showInLegend: true,
          name: "reverse",
          dataPoints: this.state.arrayFunctions.reverse
        }
        // // {
        // //   type: "spline",
        // //   showInLegend: true,
        // //   name: "Last",
        // //   dataPoints: this.state.arrayFunctions.last
        // // },
        // {
        //   type: "spline",
        //   showInLegend: true,
        //   name: "Sort",
        //   dataPoints: this.state.arrayFunctions.sort
        // }
      ]
    }

    return (
      <div>
        <CanvasJSChart options={options} />
      </div>
    )
  }
}

export default App
