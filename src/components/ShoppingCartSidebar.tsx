import React, { Component, ContextType, CSSProperties } from "react";
import { Button } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons';
import { CartContext } from "../context/CartContext";
import { CloseOutlined } from '@ant-design/icons';

import '../css/cart.css';
import "../css/layout.css";
import { Link } from "react-router-dom";

interface Props {
    isOpen: boolean;
    onSidebarClose: () => void;
}



class ShoppingCartSidebar extends Component<Props> {
    context!: ContextType<typeof CartContext>
    static contextType = CartContext;

    componentDidMount =() => {
        this.context.getTotal();
    }

    render() {
           const { cart } = this.context
        return (

            <>
                <aside style={sidebarStyle(this.props)} >
                    <div className="flex-col">
                        <div>
                            <Link to="/shop">
                                <ArrowRightOutlined style={{ fontSize: '2rem' }} onClick={this.props.onSidebarClose}/>
                            </Link>
                        </div>
                    </div>
            <div className="flex-col cart-div centerY">  
            {
                cart.map(item => (
                  
                        <div className="cartItems flex centerY centerX space-evenly">
                            <div>
                                <img className="cartItemImage" src={item.img} alt=""/>
                            </div>
                                <div className="flex-col">
                                    <p>{item.productName}</p>
                                    <p style={{ color: 'red' }}>{item.price * item.count}kr</p>
                                <div/>   
                            </div>
                                <div className="flex centerY centerX">

                                    <Button onClick={() => this.context.decrease(item.productName)}>-</Button>
                                        <span style={{margin: "0 .5rem"}}> {item.count}</span>
                                    <Button onClick={() => this.context.increase(item.productName)}>+</Button>
                                  
                                    <CloseOutlined onClick={() => this.context.removeProduct(item.productName)}style={{ fontSize: '1rem', color: 'red', marginLeft: ".5rem" }}/>
                                
                                </div>
                        </div>
                
                   ))
            }
            </div>
            <div className="flex">
                <h3 style={{paddingRight: '1rem'}}>Total: {this.context.total}kr</h3>
                <Button>Check Out</Button>
            </div>  
            </aside>
            </>
        );
    }
}


        <Button>Top</Button>


const text = 'Are you sure to delete this task?';





const sidebarStyle = (props: Props): CSSProperties => ({
    position: 'fixed',
    top: 0,
    width: props.isOpen ? '100%' : 0,
    right: 0,
    height: '100%',
    overflow: 'hidden',
    background: 'lightgrey',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'all 1s',
    paddingTop:  "1rem",
    paddingBottom: "1rem"
});


export default ShoppingCartSidebar;