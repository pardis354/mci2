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
