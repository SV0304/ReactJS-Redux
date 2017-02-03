import React from 'react';

class CartInfoApp extends React.Component{
	render(){
		return (
			<div>
				<h1>Shopping Cart</h1>
				<table className="table table-bordered">
					<thead className="thead-default">
						<tr>
							<th className="col-md-4">Product Name</th>
							<th className="col-md-2">Quantity</th>
							<th className="col-md-2">Price</th>
							<th className="col-md-2">Total price</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
					{this.renderCartItems()}
					</tbody>
				</table>
			</div>
		);
	}

	renderCartItems(){
		if(this.props.cartItems.length){
			return (
				this.props.cartItems.map((item)=>{
					return this.createCartRow(item);
				})
			);
		}else{
			return (<tr ><td colSpan="5">No items in your cart right now</td></tr>);
		}
	}

	createCartRow(item){
		return (
			<tr key={item.cartItemId}>
				<td>{item.name}</td>
				<td>{item.quantity}</td>
				<td>{item.price}</td>
				<td>{item.quantity*item.price}</td>
				<td><button onClick={(e)=>this.props.handleRemove(item)}>-</button></td>
			</tr>
		);
		
	}
}

export default CartInfoApp;
