import React from "react";
import "./RightChart.scss";
import Chart from "./Chart";

function RightChart(props) {
  return (
    <div className="right-chart-component">
      <Chart data={props} parent={"RIGHTCHART"}/>
    </div>
  );
}

export default RightChart;
