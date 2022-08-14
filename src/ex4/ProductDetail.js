import React, { Component } from "react";

export class ProductDetail extends Component {
  render() {
    const { name, price, image, description, quantity } =
      this.props.selectedProduct;
    return (
      <div className="row">
        <div className="col-4">
          <h1 className="display-4">Adias</h1>
          <img src={image} alt={name} className="w-100" />
        </div>
        <div className="col-7">
          <h1 className="display-4">Thông tin</h1>
          <p>Name:{name}</p>
          <p>Price:{price}</p>
          <p>Description: {description}</p>
          <p>Stock:{quantity}</p>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
