import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// import './App.css'

const options = {
  chart: {
    type: "column",
  },
  title: {
      text: ''
  },
  xAxis: {
    type: "hour",
  },
  yAxis: {
    title: {
      text: "",
    },
  },
  legend: {
    enabled: false,
  },
//   plotOptions: {
//     series: {
//       pointPadding: 0.4,
//       borderWidth: 0,
//       dataLabels: {
//         enabled: true,
//         format: "{point.y:.1f}%",
//       },
//     },
//   },

  series: [
    {
      name: "min",
      data: [
        49.9,
        71.5,
        106.4,
        129.2,
        144.0,
        176.0,
        135.6,
        148.5,
        216.4,
        194.1,
        95.6,
      ],
    },
    {
      name: "mid",
      data: [
        83.6,
        78.8,
        98.5,
        93.4,
        106.0,
        84.5,
        105.0,
        104.3,
        91.2,
        83.5,
        106.6,
      ],
    },
    {
      name: "hight",
      data: [
        42.4,
        33.2,
        34.5,
        39.7,
        52.6,
        75.5,
        57.4,
        60.4,
        47.6,
        39.1,
        46.8,
      ],
    },
  ],
};

export default class Chart extends Component {
  render() {
    return (
      <div className="App">
        <HighchartsReact options={options} />
      </div>
    );
  }
}
