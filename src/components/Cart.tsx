
import React, { Component, ContextType } from "react";

import { Button } from "antd";
import { CartContext } from "../context/CartContext";
import { CloseOutlined } from "@ant-design/icons";

import "../css/cart.css";
import "../css/layout.css";
import { Link } from "react-router-dom";

interface Props {}

class Cart extends Component<Props> {
  context!: ContextType<typeof CartContext>;
  static contextType = CartContext;

  componentDidMount = () => {
    this.context.getTotal();
  };

  render() {
    const { cart } = this.context;

    if(cart.length === 0) {
      return (
      <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h2>Cart is empty</h2>

      </div>
      )
    } else {

      return (
        <>
  
   
        <div className="cartMain flex flex-col centerX centerY">
          <div className="cartHeader flex centerX">
            <div className="cartHeaderDiv flex "> 
                <h3 className="cartH1">
                Your order
              </h3>
            </div>
          </div>
  
            <div className="flex-col cart-div centerY">
              <ul className="flex space-between cartUlList">
                <li className="productLi">PRODUCT</li>
                <li>PRICE</li>
                <li>QTY</li>
              </ul>
  
              {cart.map((item, index) => (
                <div key={index} className="cartItems flex centerY centerX space-evenly">
                    <img className="cartItemImage" src={item.img} alt="" />
                    <div className="flex-col cartItemText">
                      <p className="itemText">{item.productName}</p>
                    <div />
                </div>
                    <p style={{ color: "red" }}>{item.price * item.count}kr</p>
                  <div className="flex centerY centerX count-div">
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
                     ))
              }
          
          
              <div className="flex centerX checkOut-div">
                  <h3 style={{ marginBottom: '0' }}>Total: {this.context.total}kr</h3>
              </div>  
              
  
              </div>
              
              
             
                  <Link to="/checkout">
                      <Button style={{ margin: '1rem', border: '1px solid black' }}>Check Out</Button>
                  </Link>
            
        </div>
              </>
              
              );
          }

    }
    }
        
        

export default Cart;
