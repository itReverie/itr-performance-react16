import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Coin extends Component{

    render(){
        return <button
        style={{backgroundColor:'#aaaaaa', margin:'20px', width:'100px', height:'50px'}}
        onClick={this.props.delete.bind(this,this.props.id)}>
                  {this.props.id}
               </button>
    }
}


Coin.propTypes={
  id: PropTypes.number.isRequired
}
