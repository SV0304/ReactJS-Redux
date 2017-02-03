import React from 'react';
import StatelessApp from './statelessApp';
import StatefulApp from './statefulApp';
import PropsDemo from './propsDemo';
import ValidationApp from './ValidationApp';
import TextInput from './textInput';
import ComponentLifeCycle from './componentLifeCycle';
import Parent from './childParent';
import SearchPage from './searchPage';
import MyHOC from './hoc';


class App extends React.Component{
	constructor(){
		super();
		this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
	}
	forceUpdateHandler(){
		this.forceUpdate();
	}
	render(){
		return (
			<div>
				Welcome to React world {Math.random()}
				<button onClick={this.forceUpdateHandler}>Force update</button>
				<SearchPage />
				<StatelessApp />
				<StatefulApp />
				<PropsDemo headerProp="Header from App" />
				<ValidationApp />
				<TextInput />
				<ComponentLifeCycle />
				<Parent />
				<MyHOC />
			</div>
		);
	}
}

export default App;


