import React, { Component } from 'react';
import './App.css'
import Store from "./store";
//Store settings
const initialState = {count: 0}
const updateState = (state,action)=>{
  switch(action.type){
    case "INCREMENT":
    return {count: state.count + action.amount};
    case "DECREMENT":
    return {count: state.count - action.amount};
    default:
      return state;
  }
}
const incrementAction = {type: "INCREMENT",amount:1};
const decrementAction = {type: "DECREMENT",amount:1};
let store = new Store(updateState,initialState);






class App extends Component {
constructor(props){
  super(props);
  this.increment = this.increment.bind(this);
  this.decrement = this.decrement.bind(this);
  }
componentDidMount(){
  store.subscribe(()=>this.forceUpdate())
}
increment(){
  store.update(incrementAction);
}
decrement(){
  store.update(decrementAction);
}
  render() {
    return (
      <div className="App">
      
        <button className="minus" onClick={this.decrement}>-</button>
        <span className="table">{store.state.count}</span>
        <button className="plus" onClick={this.increment} >+</button>
      </div>
    );
  }
}

export default App;
