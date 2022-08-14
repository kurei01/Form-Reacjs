import React, { Component } from "react";
import RedCar from "./../assets/img/red-car.jpg";
import BlackCar from "./../assets/img/black-car.jpg";
import SilverCar from "./../assets/img/silver-car.jpg";
import SteelCar from "./../assets/img/steel-car.jpg";
import styles from "./style.module.css";
import clsx from "clsx";

// console.log(styles);

export class ChangeCar extends Component {
  state = { carImg: RedCar };

  changeCar = (img) => {
    this.setState({ carImg: img }, () => console.log(this.state.carImg));
  };

  render() {
    return (
      <div>
        <img
          style={{
            width: 600,
            backgroundColor: "red",
            padding: 10,
            margin: 100,
            transform: "rotate(20deg)",
          }}
          src={this.state.carImg}
          alt=""
        />
        <div>
          <button
            className={clsx(styles.button, styles.text, styles.spacing, {
              [styles.active]: this.state.carImg === RedCar,
            })}
            onClick={() => this.changeCar(RedCar)}
          >
            Red Car
          </button>
          <button
            className={clsx(styles.button, styles.text, styles.spacing, {
              [styles.active]: this.state.carImg === BlackCar,
            })}
            onClick={() => this.changeCar(BlackCar)}
          >
            Black Car
          </button>
          <button
            className={clsx(styles.button, styles.text, styles.spacing, {
              [styles.active]: this.state.carImg === SilverCar,
            })}
            onClick={() => this.changeCar(SilverCar)}
          >
            Silver Car
          </button>
          <button
            className={clsx(styles.button, styles.text, styles.spacing, {
              [styles.active]: this.state.carImg === SteelCar,
            })}
            onClick={() => this.changeCar(SteelCar)}
          >
            Steel Car
          </button>
        </div>
      </div>
    );
  }
}

export default ChangeCar;
