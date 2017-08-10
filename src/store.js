// let state = 0;
// let updateState = (state,action)=>{
// 	switch (action.type) {
// 	case "INCREMENT":
// 		return {count: state.count + action.amount}
// 		break;
// 	case "DECREMENT":
// 		return {count: state.count - action.amount};
// 	default:
// 		return state;
// 		break;
// 	}
// }
// const increment = {type:"INCREMENT", amount:5 };
// const decrement = {type:"DECREMENT", amount:3 };
export default class Store {
	constructor(updateState,state){
		this._updateState = updateState;
		this._state = state;
		this._collbacks = [];
	}
	get state(){
		return this._state;
	}
	update(action){
		this._state = this._updateState(this._state, action);
		this._collbacks.forEach(callback=>callback());
	}
	subscribe(collback){
		this._collbacks.push(collback);
		return ()=> this._collbacks = this._collbacks.filter(cb =>cb!==collback)
	}
}
// 
// const initialState = {count: 0};
// let storeTwo = new Store(updateState,initialState);
// storeTwo.subscribe(() => console.log(storeTwo.state));
// storeTwo.subscribe(() => console.log("state changed"));
// storeTwo.update(increment);
// storeTwo.update(decrement);
