import React, { Component } from "react";
import { connect } from "react-redux";
import { increaseAction, decreaseAction, displayAction } from "../actions/action";
import '../App.css'

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      amount: 0,
    };
  }

  dispatchIncrease = () => {
    this.props.inc(this.state.amount);
  };

  dispatchDecrease = () => {
    this.props.dec(this.state.amount);
  };



  render() {
    return (
      <div>
        {/* 
        <button onClick={this.dispatchDecrease}>withdrawal</button>
        <input
          value={this.state.amount}
          onChange={(e) => this.setState({ amount: e.target.value })}
        />
        {this.props.geekCount}
        <button onClick={this.dispatchIncrease}>deposit</button> 
        */}

<div className="cards-wrapper">
		<div className="card">
			<div className="top1">
        <span className="span">this value displays the reduxStoreObject value in real time</span>
			</div>
			<div className="bottom">
      <span className="geekCount">
          {this.props.geekCount}
        </span>
				<h3>Account Number</h3>
				<span>●●●●●●4354</span>
			</div>
		</div>

		<div className="card card-two">
			<div className="top">
        <input className="input"
          value={this.state.amount}
          onChange={(e) => this.setState({ amount: e.target.value })}
        />
    
			</div>
			<div className="bottom">
      {/* <h1 className="geekCount">{this.props.geekCount}</h1> */}
				<h3>Enter the value you want to withdraw from the input field and click on this withdraw button</h3>
				{/* <span>●●●●●●4354</span> */}
        <button className="button" onClick={this.dispatchDecrease}> withdraw</button>
			</div>
		</div>

		<div className="card card-two">
			<div className="top">
				<span>
        <input className="input"
          value={this.state.amount}
          onChange={(e) => this.setState({ amount: e.target.value })}
        />
        </span>
			</div>
			<div className="bottom">
        {/* <h1 className="geekCount">{this.props.geekCount}</h1> */}
        <h3>Enter the value you want to Deposit from the input field and click on this deposit button</h3>
        <button className="button" onClick={this.dispatchIncrease}>deposit</button>
			</div>
		</div>
    
	</div>

      </div>
    );
  }
}

const mapStateToProps = (reduxStoreObject, props) => {
  console.log("reduxStoreObject- ", reduxStoreObject);

  return {
    geekCount: reduxStoreObject.reduxCount,
  };
};

const mapDispatchToProps = (dispatch, props) => {
const inc = (DDyanamicamount) => {
    // const increaseAction = (amount) => {
    //     return {
    //     type: "INCREASE",
    //     amount: amount 
    //     }
    // };
    dispatch(increaseAction(DDyanamicamount));
  };

  const dec = (Dyanamicamount) => {
    // const decreaseAction = (amount) => {
    //     return {
    //     type: "DECREASE",
    //     amount: amount 
    //     }
    // };
    dispatch(decreaseAction(Dyanamicamount));
  };


  return {
    inc, // = inc: inc
    dec, // = dec: dec
  
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

