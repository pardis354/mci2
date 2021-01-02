import { observer } from 'mobx-react';
import React, { useRef } from "react";
import "./App.scss";
import AppStore from "./AppStore";
import FilterChart from "./Components/FilterChart";
import LeftChart from "./Components/LeftChart";
import RightChart from "./Components/RightChart";

function App(props) {
  const viewModel = useRef(new AppStore());
  const store = viewModel.current;
  return (
    <div className="main-layout">
      <h1>{store.group}</h1>
      <div className="charts-section">
        <div className="left-chart">
          <LeftChart />
        </div>
        <div className="right-chart">
          <RightChart />
        </div>
      </div>
      <div className="filter-section">
        <FilterChart />
      </div>
    </div>
  );
}

export default observer(App);
// export default App;
