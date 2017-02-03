import React, {Component} from 'react';
import {connect} from 'react-redux';


class TrainerDetails extends Component{
	render(){
		if(!this.props.trainer){
			return (<h3>Select a trainer...</h3>);
		}

		let {id, first, last, age, description, thumbnail} = this.props.trainer;
		return(
			<div>
				<img src={thumbnail} />
				<h2>{first} {last}</h2>
				<h3>Age: {age}</h3>
				<h3>Description: {description}</h3>
			</div>
		);
	}
}
function mapStateToProps(state){
	return {
		trainer:state.activeTrainer
	}
}


export default connect(mapStateToProps)(TrainerDetails);