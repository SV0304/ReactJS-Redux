import React, {Component} from 'react';

class TextInput extends Component{
	constructor(props, context){
		super(props, context);
		this.state = {inputText:"Murthy"};
	}

	handleChange(event){
		this.setState({
			inputText:event.target.value
		});
	}

	render(){
		return (
			<div>
				<label htmlFor="name">Enter Name</label>
				<input type="text" id="name" placeholder="Enter some name here" value={this.state.inputText} onChange={this.handleChange.bind(this)} />
				<TextDisplay text={this.state.inputText} />
			</div>
		);
	}
}

class TextDisplay extends Component{
	render(){
		return (
			<div>
				<p>{this.props.text}</p>
			</div>
		);
	}
}

export default TextInput;