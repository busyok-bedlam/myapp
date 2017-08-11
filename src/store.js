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
