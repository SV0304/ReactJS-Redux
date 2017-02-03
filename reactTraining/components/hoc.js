/*Higher Order Component aka light weight component*/

import React from 'react';

var newData = {
	data: 'Data from High Order Component'		
};

var MyHOC = (ComposedComponent, SomeComponent) =>
	class extends React.Component{
		componentDidMount(){
			this.setState({
				data:newData.data
			});
		}

		render(){
			return (
				<div>
				<ComposedComponent {...this.props} {...this.state} />
				<SomeComponent {...this.props} {...this.state} />
				</div>
			);
		}
	}

	class MyComponent extends React.Component{
		render(){
			return (
				<div>
					<h1>{this.props.data}</h1>
				</div>
			)
		}
	}

	class NewComponent extends React.Component{
		render(){
			return (
				<div>
					<h1>{this.props.data}</h1>
				</div>
			)
		}
	}

	export default MyHOC(MyComponent, NewComponent);