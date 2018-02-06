import React, { Component } from 'react';
import './App.css';
import './components/Common/Coin.css';
import coins from './data/Coins';
import CoinManager from "./components/CoinManager";

import registerObserver from "react-perf-devtool";

const options = {
  shouldLog: true,
  port: 8080, // Port to which measures are to be logged
  //components:['App']
};
function callback(measures) {
  // do something with these measures. Send to Googel Analytics Dashboard for further analysis ??
  console.table(measures);
}

// Now pass options and callback to registerObserver hook 😄
registerObserver(options, callback);

class App extends Component {

  render() {
    return <div>
         <h1 className="App-title">
          Welcome to React Performance with React 16
        </h1>
        <CoinManager coins={coins} />
      </div>;
  }
}

export default App;
