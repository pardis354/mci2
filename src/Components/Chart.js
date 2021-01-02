import HighchartsReact from "highcharts-react-official";
import { toJS } from "mobx";
import React from "react";
import "./Chart.scss";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highs: toJS(this.props.data.highs),
      // highs : localStorage.getItem('highs'),
      lows: toJS(this.props.data.lows),
      // lows: localStorage.getItem('lows'),
      average: [],
      volume: toJS(this.props.data.volume),
      // volume: localStorage.getItem('volume'),
    };
  }

  componentDidMount() {
    if (this.props.parent === "LEFTCHART") {
      this.averageCalculator();
    }
  }

  averageCalculator = () => {
    let highs = this.state.highs;
    console.log("highshighshighshighs")
    console.log(highs)
    let lows = this.state.lows;
    let avrg = highs.map(function (num, idx) {
      return (num + lows[idx]) / 2;
    });
    this.setState({ average: avrg });
  };

  render() {
    const highs=localStorage.getItem('highs');
    const lows=localStorage.getItem('lows');
    const options = {
      chart: {
        type: "column",
      },
      title: {
        text: this.props.title,
      },
      xAxis: {
        type: "hour",
      },
      yAxis: {
        title: {
          text: "",
        },
      },
      plotOptions: {
        series: {
          // showCheckbox: true
        }
      },
      legend: {
        // itemCheckboxStyle: {
        //   // height: '20px',
        //   // width:'20px',
        // }
      },
      series: [
        {
          name: "max",
          data: this.state.highs,
        },
        {
          name: "mid",
          data: this.state.average,
        },
        {
          name: "min",
          data: this.state.lows,
        },
      ],
    };

    
    const optionsRight = {
      chart: {
        type: "column",
      },
      title: {
        text: this.props.title,
      },
      xAxis: {
        type: "hour",
      },
      yAxis: {
        title: {
          text: "",
        },
      },
      // legend: {
      //   enabled: false,
      // },


      plotOptions: {
        series: {
          // showCheckbox: true
        }
      },
      legend: {
        // itemCheckboxStyle: {
        //   height: '20px',
        //   width:'20px',
        // }
      },
      series: [
        {
          name: "volume",
          data: this.state.volume,
        }
      ],
    };

    return (
      <div className="chart-component">
        {this.props.parent === "LEFTCHART" ? (
          <HighchartsReact options={options} />
        ) : (
          <HighchartsReact options={optionsRight} />
        )}
      </div>
    );
  }
}

export default Chart;
