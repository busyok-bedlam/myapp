import React, { Component } from 'react';
import './App.css'

import {createStore} from 'redux'
//Store settings
const initialState = {count: 0}
const updateState = (state,action)=>{
  switch(action.type){
    case "INCREMENT":
    return {count: state.count + action.amount};
    case "DECREMENT":
    return {count: state.count - action.amount};
    case "RESET":
    return {count: 0}
    default:
      return state;
  }
}
const incrementAction = {type: "INCREMENT",amount:1};
const decrementAction = {type: "DECREMENT",amount:1};
const resetAction = {type: "RESET"};
//let store = new Store(updateState,initialState);
let store2 = createStore(updateState,initialState)





class App extends Component {
constructor(props){
  super(props);
  this.increment = this.increment.bind(this);
  this.decrement = this.decrement.bind(this);
  this.reset = this.reset.bind(this);
  }
componentDidMount(){
  store2.subscribe(()=>this.forceUpdate())
}
increment(){
  store2.dispatch(incrementAction);
}
decrement(){
  store2.dispatch(decrementAction);
}
reset(){
  store2.dispatch(resetAction);
}
  render() {
    let count = store2.getState().count;
    return (
      <div className="App">
        <div className="table">{count}</div>
        <div className="terminal">
          <button className="minus" onClick={this.decrement}>-</button>
          <button className="reset" onClick={this.reset}>R</button>
          <button className="plus" onClick={this.increment} >+</button>
        </div>
        <div className="regulate">
          <input ref="amount" defaultValue="1" />
        </div>



      </div>
    );
  }
}

export default App;
