import React, { Component, ContextType, CSSProperties } from "react";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { CartContext } from "../context/CartContext";
import { CloseOutlined } from "@ant-design/icons";
import shopImg from "../images/shop-img.jpg";
import "../css/cart.css";
import "../css/layout.css";
import { Link } from "react-router-dom";

interface Props {}

class ShoppingCartSidebar extends Component<Props> {
  context!: ContextType<typeof CartContext>;
  static contextType = CartContext;

  componentDidMount = () => {
    this.context.getTotal();
  };

  render() {
    const { cart } = this.context;
    return (
      <>
        <img className="imageBack" src={shopImg} alt="" />
        <h1
          style={{
            textAlign: "center",
            marginTop: "10rem",
            marginBottom: "10rem",
            color: 'white',
            fontSize: '5rem'
          }}
        >
          Your order
        </h1>
          <div className="flex-col cart-div centerY">

            {cart.map((item) => (
              <div className="cartItems flex centerY centerX space-evenly">
                <div>
                  <img className="cartItemImage" src={item.img} alt="" />
                <div className="flex-col cartItemText">
                  <p className="itemText">{item.productName}</p>
                  <p style={{ color: "red" }}>{item.price * item.count}kr</p>
                  <div />
                </div>
                </div>

                <div className="flex centerY centerX">
                  <Button
                    onClick={() => this.context.decrease(item.productName)}>
                    -
                  </Button>
                  <span style={{ margin: "0 .5rem" }}> {item.count}</span>
                  <Button
                    onClick={() => this.context.increase(item.productName)}>
                    +
                  </Button>

                  <CloseOutlined
                    onClick={() => this.context.removeProduct(item.productName)}
                    style={{
                      fontSize: "1rem",
                      color: "red",
                      marginLeft: ".5rem",
                    }}
                  />
                  
                </div>
              </div>
            ))}
          </div>
          <div className="flex centerX checkOut-div">
            <h3 style={{ paddingRight: "1rem" }}>
              Total: {this.context.total}kr
            </h3>
            <Button>Check Out</Button>
          </div>

      </>
    );
  }
}


export default ShoppingCartSidebar;
