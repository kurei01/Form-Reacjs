import React, { Component } from "react";

export class Cart extends Component {
  closeButtonRef = React.createRef();
  totalPrice = (cart) => {
    let sum = 0;
    this.state.cart.forEach((item) => {
      sum += item.product.price * item.quantity;
    });
    return sum;
  };
  renderCart = (cart) => {
    return cart.map((item) => {
      return (
        <tr key={item.product.id} className="align-middle">
          <th>{item.product.id}</th>
          <th>{item.product.name}</th>
          <th>
            <img
              src={item.product.image}
              alt={item.product.name}
              className="img-fluid"
              style={{ width: 100, height: 100 }}
            />
          </th>
          <th>
            <button
              className="btn btn-info"
              onClick={() => this.props.subCart(item.product.id)}
            >
              -
            </button>
            <span> {item.quantity} </span>
            <button
              className="btn btn-info"
              onClick={() => this.props.addToCart(item.product)}
            >
              +
            </button>
          </th>
          <th>{item.product.price}$</th>
          <th>{item.product.price * item.quantity}$</th>
          <th>
            <button
              className="btn btn-danger"
              onClick={() => this.props.deleteCartItem(item.product.id)}
            >
              Delete
            </button>
          </th>
        </tr>
      );
    });
  };
  render() {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Cart
              </h5>
              <button
                ref={this.closeButtonRef}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Product Id</th>
                    <th>Product Name</th>
                    <th>Product Image</th>
                    <th>Quatity</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>{this.renderCart(this.props.cart)}</tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={() => {
                  this.props.clearCart();
                  alert("tổng giá tiền là:");
                  this.closeButtonRef.current.click();
                }}
                type="button"
                className="btn btn-primary"
              >
                Paid
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
