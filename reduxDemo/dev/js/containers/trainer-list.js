import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

/*hook the action*/
import {selectTrainer} from '../actions/index';

class TrainerList extends Component {
	createListItems(){
		return this.props.trainers.map((trainer)=>{
			return (
				<div key={trainer.id} onClick={()=>{this.props.selectTrainer(trainer)}}>
					{trainer.first} {trainer.last}
				</div>
			);
		});
	}
	render(){
		return (
			<div className="bg">
				{this.createListItems()}
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		trainers: state.trainers
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({selectTrainer:selectTrainer},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainerList);
