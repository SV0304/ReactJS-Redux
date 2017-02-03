import React from 'react';

class LoginApp extend React.Component{
	render(){
		return (
			<div className="well">
				<h2 className="text-success">{this.props.title}
				<h3 className="text-danger">{this.props.subtitle}</h3>
				<h3 className="text-info">Login</h3>
				User Name
			</div>
		);
	}
}