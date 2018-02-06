import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListCoins from './Common/ListCoins';

export default class CoinManager extends Component {
                 static propTypes = { coins: PropTypes.array.isRequired };

                 constructor(props) {
                   super(props);
                   this.state = { color: "#b3b3cc" };
                   this.onColorSelected = this.onColorSelected.bind(this);
                 }

                 createSelectItems() {
                   let items = [<option key="gray" value="#b3b3cc"> Gray</option>,
                                <option key="pink" value="#ff80ff"> Pink</option>,  
                                <option key="brown" value="#cc9966"> Brown </option>];
                   return items;
                 }

                 onColorSelected(event) {
                   this.setState({ color: event.target.value });
                 }

                 render() {
                   return <div className="App">
                       <select type="select" onChange={this.onColorSelected} label="Color Select">
                         {this.createSelectItems()}
                       </select>
                       <ListCoins coins={this.props.coins} color={this.state.color} colorChanged={this.onColorSelected} />
                     </div>;
                 }
               }
