import React, { Component } from "react";

export class ProductItem extends Component {
  render() {
    const { name, price, image } = this.props.prod;
    return (
      <div className="card mb-4 p-3">
        <img src={image} alt={name} className="w-100 h-100 d-inline-block" />
        <h3>{name}</h3>
        <h5>{price}$</h5>
        <div>
          <button
            className="btn btn-info me-3"
            onClick={() => this.props.selectProduct(this.props.prod)}
          >
            Detail
          </button>
          <button
            className="btn btn-dark"
            onClick={() => this.props.addToCart(this.props.prod)}
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}

export default ProductItem;
