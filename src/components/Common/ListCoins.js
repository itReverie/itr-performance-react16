import React, { Component } from "react";
import Coin from "./Coin";
import PropTypes from 'prop-types';

class ListCoins extends Component{

  constructor(props){
        super(props);
        this.state = {
          coins: this.props.coins,
          color: this.props.color
        }

     }

     delete(id){
          // filter() method creates a new array with all elements that pass the test
           this.setState(prevState => ({
               coins: prevState.coins.filter(coin => coin.id !== id )
           }));
        }

  componentWillMount(){
      this.delete = this.delete.bind(this);
  }

 render(){
    return (<div>{this.state.coins.map((coin, index) => {
      return <Coin
      key = {coin.id}
      coin = {coin}
      color = {this.props.color}
      delete={this.delete}
      />}
    )}</div>);
 }
}

ListCoins.propTypes = {
  coins: PropTypes.array.isRequired,
  color: PropTypes.string,
};

export default ListCoins;
