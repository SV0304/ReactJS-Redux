import React from 'react';
import ProductInfoApp from './productInfoApp';
class ProductApp extends React.Component{
	constructor(props){
		super(props);
		this.handleAdd = this.handleAdd.bind(this);
	}
	handleAdd(item){
		this.props.addItemCallback(item);
	}
	render(){
		return (	
			<div>
				<table className="table-hover table-bordered">
					<thead>
						<tr>
							<th className="col-md-2">Product ID</th>
							<th className="col-md-4">Product Name</th>
							<th className="col-md-4"> Price</th>
							<th className="col-md-2">Rating</th>
							<th></th>
						</tr>

					</thead>
					<tbody>	
						{this.props.productList.map((item, i) => 
							<TableRow handleAdd={this.handleAdd} key={i} data={item} /> 
						)}
					</tbody>
				</table>
			</div>
		);
	}
}

class TableRow extends React.Component{
	render(){
		var {id, name, price, rating} = this.props.data;
		return (
			<tr>
				<td className="col-md-2">{id}</td>
				<td className="col-md-4">{name}</td>
				<td className="col-md-4">{price}</td>
				<td className="col-md-2">{rating}</td>
				<td><button onClick={(e)=>{this.props.handleAdd(this.props.data)}}>+</button></td>
			</tr>
		);
	}
}

export default ProductApp;