import { makeAutoObservable } from "mobx";
import { getHourlyExchangeData, getHourlyPairData } from "./AppServices";

export class AppStore {
  leftChartData = [];
  highs = [];
  lows = [];
  leftChartTitle = "";
  rightChartData = [];
  volume=[];
  rightChartTitle = "Market Volume of";

  constructor() {
    makeAutoObservable(this);
    this.fetchHourlyExchange();
    this.fetchHourlyPair();

    setTimeout(() => {
      localStorage.removeItem("highs");
      localStorage.removeItem("lows");
      localStorage.removeItem("volume");
    }, 3600000);
  }

  //   API for the left chart

  fetchHourlyPair() {
    return new Promise((resolve, reject) => {
      getHourlyPairData()
        .then((data) => {
          this.leftChartData = data.data.Data.Data;
          for (let i = 0, x = this.leftChartData.length; i < x; i++) {
            this.highs.push(this.leftChartData[i].high);
            this.lows.push(this.leftChartData[i].low);
            localStorage.setItem('highs', JSON.stringify(this.highs))
            localStorage.setItem('lows', JSON.stringify(this.lows))
          }
          resolve();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  //   API for the right chart

  fetchHourlyExchange() {
    return new Promise((resolve, reject) => {
      getHourlyExchangeData()
        .then((data) => {
          this.rightChartData = data.data.Data;
          for (let i = 0, x = this.rightChartData.length; i < x; i++) {
            this.volume.push(this.rightChartData[i].volume);
            localStorage.setItem('volume', JSON.stringify(this.volume))
          }
          resolve();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }
}

export default AppStore;
