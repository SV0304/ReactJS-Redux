/*Entry Point*/
import React from 'react';
import ReactDOM from 'react-dom';
import ShoppingApp from '../components/shoppingApp';

$.ajax({
	url:"http://localhost:8080/sample.json",
	method:"get",
	success: function(response){
		ReactDOM.render(<ShoppingApp products={response} />, document.getElementById('container'));
	},
	error: function(){
		console.log("error....");
	}
});



