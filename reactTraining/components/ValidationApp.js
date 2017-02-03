import React from 'react';

class ValidationApp extends React.Component{
	render(){
		return (
			<div className="well">
				<h3>Array:{this.props.propArray}</h3>
				<h3>Bool:{this.props.propBool?"True...":"False..."}</h3>
				<h3>Func:{this.props.propFunc(3)}</h3>
				<h3>Number:{this.props.propNumber}</h3>
				<h3>String:{this.props.propString}</h3>
				<h3>Object:{this.props.propObject.objectName1}</h3>
			</div>
		);
	}
}

ValidationApp.propTypes = {
	propArray:React.PropTypes.array.isRequired,
	propBool:React.PropTypes.bool.isRequired,
	propFunc:React.PropTypes.func,
	propNumber:React.PropTypes.number,
	propObject:React.PropTypes.object
}

ValidationApp.defaultProps = {
	propArray:[1,2,3,4,5],
	propBool:true,
	propFunc:(e)=>{return e},
	propNumber:5,
	propString:"String value",
	propObject:{
		objectName1:"abc"
	}
}

export default ValidationApp;

