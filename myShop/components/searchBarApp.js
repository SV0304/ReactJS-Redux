import React from 'react';
class SearchBarApp extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			searchText:""
		}
	}
	handleChange(event){
		
		this.setState({
			searchText: event.target.value
		});
		
		this.props.filterCallback(event.target.value);

	}
	render(){
		return (
			<div className="col-md-6">	
				<form >
					<div className="row">
						<div className="form-group">
							<input type="text" id="userId" className="form-control" value={this.state.searchText} onChange={this.handleChange.bind(this)} placeholder="Search products here" />
						</div>
					</div>
				</form>
				{this.state.searchText.length?(<p>Searching for: {this.state.searchText}</p>):(<p></p>)}
				
			</div>
		);
	}
}

export default SearchBarApp;