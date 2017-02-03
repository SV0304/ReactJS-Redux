import React from 'react';

class PropsDemo extends React.Component{
	render(){
		return (
			<div className="well">
				<h1 className="text-success">{this.props.headerProp}</h1>
				<h2 className="text-danfer">{this.props.contentProp}</h2>
			</div>
		);
	}
}

PropsDemo.defaultProps = {
	headerProp: "Header from default props....",
	contentProp: "Content from default props..."
}


export default PropsDemo;
