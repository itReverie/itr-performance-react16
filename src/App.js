import React, { Component } from 'react';
import './App.css';
import ListCoins from './components/ListCoins';
import registerObserver from 'react-perf-devtool';

const options = {
  shouldLog: true,
  port: 3000 // Port to which measures are to be logged
}
function callback(measures) {
  // do something with these measures. Send to Googel Analytics Dashboard for further analysis ??
  console.table(measures);
}

// Now pass options and callback to registerObserver hook 😄
registerObserver(options, callback)

class App extends Component {

constructor(props) {
  super(props);
       this.state = {coins: [{id:1, name:'bitcoin', color:'#a2a2a2', url:''},
       {id:2, name:'bitcoin', color:'#a2a2a2', url:''},
       {id:3, name:'ethereum', color:'#a2a2a2', url:''},
       {id:4, name:'ajax', color:'#a2a2a2', url:''},
     {id:5, name:'A', color:'#a2a2a2', url:''},
   {id:6, name:'B', color:'#a2a2a2', url:''},
 {id:7, name:'C', color:'#a2a2a2', url:''},
{id:8, name:'D', color:'#a2a2a2', url:''}]};
}
  _handleDelete(id){
    this.setState(prevState => ({
        coins: prevState.data.filter(el => el != id )
    }));
}

  render() {
    return <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            Welcome to React Performance with React 16
          </h1>
        </header>
        <p className="App-intro" />
        <ListCoins  coins={this.state.coins}/>
      </div>;
  }
}

export default App;
