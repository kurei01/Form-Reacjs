import React, { Component } from "react";

export class DemoState extends Component {
  state = { isLogin: false };

  renderMessage() {
    if (this.state.isLogin) return <h1>Lô tứn anh</h1>;
    return <h1>đăng nhập đê</h1>;
  }

  signIn = () => {
    this.setState({
      isLogin: true,
    });
  };

  signOut = () => {
    this.setState({
        isLogin: false,
      });
    };

  render() {
    return (
      <div>
        {this.renderMessage()}
        {this.state.isLogin ? (
          <button onClick={this.signOut}>Đăng xuất</button>
        ) : (
          <button onClick={this.signIn}>Đăng nhập</button>
        )}
      </div>
    );
  }
}

export default DemoState;
