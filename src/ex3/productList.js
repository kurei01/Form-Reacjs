import React, { Component } from "react";
import products from "./../assets/products.json";
console.log(products);
export class ProductList extends Component {
  renderProduct = () => {
    const productHTMLs = products.map((item) => {
      return (
        <div key={item.id} className="col-4">
          <div className="item card">
            <img src={item.img} alt="" />
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
          </div>
        </div>
      );
    });
    return productHTMLs;
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderProduct()}</div>
      </div>
    );
  }
}

export default ProductList;
