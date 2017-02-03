import React from 'react';

class Parent extends React.Component{
	constructor(props){
		super(props);

		this.state ={
			data: 'Initial data...'
		}
		this.updateState = this.updateState.bind(this);
	}

	updateState(e){
		this.setState({
			data:e.target.value
		});
	}

	render(){
		return (
			<Content updateStateProp={this.updateState} myDataProp={this.state.data} />
		);
	}
}

class Content extends React.Component{
	render(){
		return (
			<div>
				<input id="myData" type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} />
				<h3>{this.props.myDataProp}</h3>
			</div>
		);
	}
}

export default Parent;