import React from "react";
import "./header.css";

class Header extends React.Component {
  //binding
  test = "test binding";
  testNum = 69;
  //binding function
  showMessage() {
    alert("lô tứn anh");
  }
  showMessage2(message) {
    alert(message);
  }
  render() {
    return (
      <div className="header">
        <a href="#">Cybersorf</a>
        <nav>
          <a href="#">Home</a>
          <a href="#">Service</a>
          <a href="#">Contact</a>
        </nav>
        <p>{this.test}</p>
        {/* <p>{this.testNum}</p> */}
        <p>{`this is js: ${68 / 2}`}</p>
        {/* {this.showMessage()} */}

        <button onClick={this.showMessage}>show message</button>
        <button onClick={() => this.showMessage2("hello")}>
          show message2
        </button>
      </div>
    );
  }
}

export default Header;
