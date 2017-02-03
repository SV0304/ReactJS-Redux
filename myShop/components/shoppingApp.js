import React from 'react';
import LoginApp from './loginApp';
import SearchBarApp from './searchBarApp';
import ProductApp from './productApp';
import CartInfoApp from './cartInfoApp';
class ShoppingApp extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data:this.props.products,
			filteredData:this.props.products,
			cartItems:[]
		}
		this.filterData = this.filterData.bind(this);
		this.addCartItems = this.addCartItems.bind(this);
		this.removeCartItem = this.removeCartItem.bind(this);
	}

	filterData(pattern){
		let filteredData = this.state.data.filter((item)=>{
			if(item.name.toLowerCase().indexOf(pattern.toLowerCase())!==-1){
				return true;
			}
			return false;
		});
		this.setState({
			filteredData
		})
	}

	addCartItems(cartItem){
		
		let foundItem = this.state.cartItems.filter((item)=>{
			if(item.id===cartItem.id){
				return item;
			}
		});
		if(foundItem.length){
			cartItem.cartItemId = Math.random(); 
			cartItem.quantity = foundItem[0].quantity + 1;
		}else{
			cartItem.cartItemId = Math.random();
			cartItem.quantity = 1;
		}
		this.setState({cartItems:this.state.cartItems.concat(cartItem)});
	
	}

	removeCartItem(cartItem){
		let cartItems = [];
		let foundItem = this.state.cartItems.filter((item)=>{
			if(item.id===cartItem.id){
				return item;
			}
		});
		if(foundItem.length){
			cartItem.cartItemId = foundItem[0].cartItemId; 
			cartItem.quantity = foundItem[0].quantity - 1;
		}
		console.log("quantity left -->",foundItem[0].quantity)
		if(!foundItem[0].quantity){
			cartItems = this.state.cartItems.filter((item)=>{
				if(item.id!=foundItem[0].id){
					return item;
				}
			});
			this.setState({cartItems});
			return;
		}

		this.setState({cartItems:this.state.cartItems.concat(cartItem)});
	}

	render(){
		return (
			<div>
				<div className="well">
					<LoginApp />
				</div>
				<SearchBarApp filterCallback={this.filterData} productList={this.props.products}/>
				<div style={{"clear":"both"}}></div>
				<ProductApp productList={this.state.filteredData} addItemCallback={this.addCartItems} />
				<CartInfoApp cartItems={this.state.cartItems} handleRemove={this.removeCartItem} />
			</div>
		);
	}
}

export default ShoppingApp;