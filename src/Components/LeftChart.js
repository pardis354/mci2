import React from "react";
import "./LeftChart.scss";
import Chart from "./Chart";

function LeftChart(props) {

  return (
    <div className="left-chart-component">
      <Chart data={props} parent={"LEFTCHART"}/>
    </div>
  );
}

export default LeftChart;
