import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {testAction} from '../actions'

class Dashboard extends Component{
	render(){
		return (
			<div>
				This is dashboard section<br/>
				<a href="#" onClick={(event)=>{event.preventDefault();this.props.testAction();}} >Click here</a>
				<p>{this.props.helloWorldText.message}</p>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		helloWorldText:state.helloWorldText
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({testAction:testAction},dispatch);
}

export default connect(mapStateToProps, {testAction})(Dashboard);