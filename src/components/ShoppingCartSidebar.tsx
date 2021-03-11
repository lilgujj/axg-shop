import { Component, ContextType, CSSProperties } from "react";
import { Button } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons';
import { CartContext } from "../context/CartContext";
import { RouteComponentProps } from "react-router-dom";
import { InputNumber, Popconfirm, message } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import '../css/cart.css';
import "../css/layout.css";

interface Props {
    isOpen: boolean;
    onSidebarClose: () => void;
}



class ShoppingCartSidebar extends Component<Props> {
    context!: ContextType<typeof CartContext>
    static contextType = CartContext;

    componentDidMount() {
        
    }

    render() {
           const { cart } = this.context
        return (

            <>
                <aside style={sidebarStyle(this.props)} >
                    <div className="flex-col">
                        <div>
                            <ArrowRightOutlined style={{ fontSize: '2rem' }} onClick={this.props.onSidebarClose}/>
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
                                    <p style={{ color: 'red' }}>{item.price}kr</p>
                                <div/>   
                            </div>
                                <div>
                                    <InputNumber style={{width: "4rem"}} onChange={this.context.updateValue} min={1} max={10} defaultValue={item.count} bordered={true} />



                                    {/* <Popconfirm placement="top" title={text} onConfirm={() => this.context.removeProduct(item.productName)} okText="Yes" cancelText="No"> */}
                                  
                                        <CloseOutlined onClick={() => this.context.removeProduct(item.productName)}style={{ fontSize: '1rem', color: 'red', marginLeft: ".5rem" }}/>
                                
                                    {/* </Popconfirm> */}

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