import React from 'react';

class ComponentLifeCycle extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data:0,
			msg:"Initial data...",
			newmsg:"Nodata"
		}

		this.setNewNumber = this.setNewNumber.bind(this);
		this.updateState = this.updateState.bind(this);
	}
	setNewNumber(){
		this.setState({data:this.state.data + 1});
	}
	updateState(e){
		this.setState({msg:e.target.value});
	}

	render(){
		return (
			<div>
				<button	onClick={this.setNewNumber}>INCREMENT</button>
				<Content myNumber={this.state.data} ></Content>
				<br/>
				<input type="text" value={this.state.msg} onChange={this.updateState} />
				<h3>{this.state.msg}</h3>
			</div>
		);
	}
}

class Content extends React.Component{
	componentWillMount(){
		console.log("Component Will mount ");		
	}
	componentDidMount(){
		console.log("Component Did mount");
	}
	componentWillReceiveProps(newProps){
		console.log("Component WILL RECEIVE PROPS!");
	}
	shouldComponentUpdate(newProps, newState){
		console.log("should component update passing true")
		return true;
	}
	componentWillUpdate(){
		console.log("Component Will update");
	}
	componentDidUpdate(){
		console.log("Component Did update");
	}
	componentWillUnmount(){
		console.log("Component will unmount");
	}

	render(){
		return (
			<h3>{this.props.myNumber}</h3>
		);
	}
}


export default ComponentLifeCycle;

