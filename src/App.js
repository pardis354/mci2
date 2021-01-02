import "./App.scss";
import LeftChart from "./Components/LeftChart";
import RightChart from "./Components/RightChart";
import FilterChart from "./Components/FilterChart";

function App() {
  return (
    <div className="main-layout">
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

export default App;
