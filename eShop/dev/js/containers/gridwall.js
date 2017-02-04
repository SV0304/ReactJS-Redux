import React, {Component} from 'react';
import {connect} from 'react-redux';

class Gridwall extends Component{
    render(){
        console.dir(this.props.products);
        return (
            <div>
            {   this.props.products.map((product)=>{
                    return this.renderProducts(product)
                 })
            }
            </div>
        );
    }
    renderProducts(product){
        let {id, name, price, rating, imgSrc} = product;
        return (
            <div key={id} style={{"margin":"10px"}} className="col-md-4">
                <div className="thumbnail col-md-8">
                    <img src={imgSrc} style={{"width":"100%"}}/>
                </div>
                <div className="col-md-4">
                    <p>Product Name:{name}</p>
                    <p>Price: {price}</p>
                    <p>Rating:{rating}</p>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        products:state.products
    };
}

export default connect(mapStateToProps)(Gridwall);