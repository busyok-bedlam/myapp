import React, { Component } from 'react';
import './App.css'
import {createStore} from 'redux'
//Store settings
const initialState = {count: +0}
const updateState = (state,action)=>{
  switch(action.type){
    case "INCREMENT": return {count: state.count + action.amount};
    case "DECREMENT": return {count: state.count - action.amount};
    case "RESET": return {count: 0};
    default: return state;
  }
}
let increment = (amount)=>({type: "INCREMENT" , amount});
let decrement = (amount)=>({type: "DECREMENT" , amount});
let reset = ()=>({type: "RESET"})
//store settings end



let store = createStore(updateState,initialState)
class App extends Component {
constructor(props){
  super(props);
  this.increment = this.increment.bind(this);
  this.decrement = this.decrement.bind(this);
  this.reset = this.reset.bind(this);
  }
componentDidMount(){
  store.subscribe(()=>this.forceUpdate())
}
increment(){
  let amount = parseInt(this.refs.amount.value || 1);
  store.dispatch(increment(amount));
}
decrement(){
  let amount = parseInt(this.refs.amount.value || 1);
  store.dispatch(decrement(amount));
}
reset(){
  store.dispatch(reset());
}
  render() {
    const count = store.getState().count;
    return (
      <div className="App">
        <div className="table">{count}</div>
        <div className="terminal">
          <button className="minus" onClick={this.decrement}>-</button>
          <button className="reset" onClick={this.reset}>R</button>
          <button className="plus" onClick={this.increment} >+</button>
        </div>
        <div className="regulate">
          <input id="pole" ref="amount" defaultValue="1"/>
        </div>
      </div>
    );
  }
}

export default App;
