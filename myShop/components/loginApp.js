import React from 'react';

class LoginApp extends React.Component{
	constructor(props,context){
		super(props,context);
		this.state = {
			usrId:"",
			pwd:"",
			isLoggedIn:false,
			logginFailed:false
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event){
		this.setState({
			[event.target.name]:event.target.value
		});
	}
	handlePasswordChange(event){
		this.setState({
			pwd:event.target.value
		});
	}
	handleSubmit(event){
		event.preventDefault();
		let usrId = this.state.usrId;
		let pwd = this.state.pwd;
		var self = this;
		if(usrId.length && this.state.pwd.length){
			$.ajax({
				url:"http://localhost:8080/allowedUser.json",
				method:"get",
				success: function(response){
					let validUser = false;
					let logginFailed = true;
					response.map((data,i)=>{
						if(data.userId===usrId && data.pwd===pwd){
							validUser = true;
							logginFailed = false;
							return;
						}
					});

					self.setState({
						isLoggedIn:validUser,
						logginFailed:logginFailed
					});
				}
			});
		}
		
	}
	render(){

		if(this.state.isLoggedIn){
			return (<div><h1> Welcome, {this.state.usrId}.</h1></div>);
		}else{
			return (
				<div>
					<h1> Welcome, Guest.</h1>
					<form >
						<div className="row">
							<div className="form-group col-lg-3">
								<label htmlFor="userId">UserName:</label>
								<input type="text" id="userId" name="usrId" onChange={this.handleChange} className="form-control" value={this.state.usrId} placeholder="enter your username" />
							</div>
						</div>
						<div className="row">
							<div className="form-group col-lg-3">
								<label htmlFor="pwd">Password:</label>
								<input type="password" id="pwd" name="pwd" onChange={this.handleChange} className="form-control" value={this.state.pwd} placeholder="enter your password" />
							</div>
						</div>
						{ this.state.logginFailed ? (<p className="text-danger">Invalid userId / password</p>):(<p></p>)}
						<button id="loginBtn" className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Sign In</button>
					</form>
				</div>
			);
		}
	}
}

export default LoginApp;