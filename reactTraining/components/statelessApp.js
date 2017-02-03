import React from 'react';

class StatelessApp extends React.Component{
	render(){
		return (
			<div className="well">
				<Header />
				<Content />
			</div>
		);
	}
}

class Header extends React.Component{
	render(){
		return (
			<div>
				<h1 >Header of statelessApp</h1>
			</div>
		);
	}
}

class Content extends React.Component{
	render(){
		return(
			<div>
				<h2>Content of statelessApp</h2>
				<p>Displaying content here!!!</p>
			</div>
		);
	}
}


export default StatelessApp;