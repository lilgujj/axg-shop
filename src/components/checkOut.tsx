import { Button, Form, Input, Radio, Select } from "antd";
import { AntTreeNode, AntTreeNodeProps } from "antd/lib/tree";
import React, { Component, ContextType, useDebugValue } from "react";
import shopImg from "../images/shop-img.jpg";
import "../css/layout.css"
import "../css/checkOut.css"
import { Link, Route, Switch } from "react-router-dom";
import { CartContext } from "../context/CartContext";



interface State {
    value: number
    shippingValue: number
}

class CheckOut extends Component<{}, State> {
    context!: ContextType<typeof CartContext>;
    static contextType = CartContext;

    state = {
        value: 0,
        shippingValue: 0,
    };

    onChange = (e: any) => {
        // console.log('radio checked', e.target.value);
        const value = e.target.value
        this.setState({
            value: value
        });
    };



    changeShipping = (e: any) => {
        console.log('radio checked', e.target.value);
        const value1 = e.target.value
        this.setState({
            shippingValue: value1
        });
    };

    render() {

        const { value } = this.state

      
        const validatePersonalMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        }
    };


        return(
            <>
            <img className="imageBack" src={shopImg} alt=""/>
            <h1 style={{ textAlign: 'center', marginTop: '30rem' }}>Payment</h1>
            <div className="flex-col centerY centerX" style={{marginTop: "5rem", marginBottom: "1rem"}}>
                <div className="formBorder" style={{margin: ".5rem 0"}}>
                    <Form className="flex-col centerY centerX" name="nest-messages" validateMessages={validatePersonalMessages}>
                        <h3>Personal Information</h3>
                        <Form.Item name={["user", "firstname"]} label="Firstname" rules={[{ required: true}]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={["user", "lastname"]} label="Lastname" rules={[{ required: true}]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={["user", "email"]} label="Email" rules={[{ required: true, type: "email"}]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="phone" label="Phone Number" rules={[{ required: true}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name={["user", "adress"]} label="Adress" rules={[{ required: true}]}>
                            <Input/>
                        </Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                <div className="formBorder">
                    <Form className="flex-col centerY centerX" name="nest-messages" >

                        <h3>Payment method</h3>

                        <Radio.Group>
                            <Link to="/checkout/swish">
                                <Radio value={1} onChange={this.onChange}>
                                    Swish
                                </Radio>
                            </Link>
                            <Link to="/checkout/credit-card">
                                <Radio value={2} onChange={this.onChange}>Credit Card</Radio>
                            </Link>
                            <Link to="/checkout/klarna">
                                <Radio value={3} onChange={this.onChange}>Klarna</Radio>
                            </Link>

                        </Radio.Group>
                    </Form>
                </div>
                
                <Switch>
                    <Route path="/checkout/swish">
                        <div className="formBorder" style={{marginTop: ".5rem"}}>
                            <Form className="flex-col centerY centerX" name="nest-messages" validateMessages={validatePersonalMessages}>
                                <Form.Item name="phone" label="Phone Number" rules={[{ required: true}]}>
                                    <Input/>
                                </Form.Item>
                            </Form>
                        </div>
                    </Route>
                    <Route path="/checkout/credit-card">
                        <div className="formBorder" style={{marginTop: ".5rem"}}>
                            <Form className="flex-col centerY centerX" name="nest-messages" validateMessages={validatePersonalMessages}>
                                <Form.Item name="cart" label="Card Number" rules={[{ required: true}]}>
                                    <Input/>
                                </Form.Item>
                                <div className="flex centerX centerY ">
                                    <Form.Item name="card" label="Expiraition Date" rules={[{ required: true}]}>
                                        <Input/>
                                    </Form.Item>
                                    <Form.Item name="cvv" label="CVV" style={{width: "6rem"}}rules={[{ required: true}]}>
                                        <Input/>
                                    </Form.Item>
                                </div>
                            </Form>
                        </div>
                    </Route>
                    <Route path="/checkout/klarna">
                        <div className="formBorder" style={{marginTop: ".5rem"}}>
                            <Form className="flex-col centerY centerX" name="nest-messages" validateMessages={validatePersonalMessages}>
                                <Form.Item name="email" label="Klarna Email" rules={[{ required: true}]}>
                                    <Input/>
                                </Form.Item>
                            </Form>
                        </div>
                    </Route>
                </Switch>
<div className="formBorder">
                    <Form className="flex-col centerY centerX" name="nest-messages" >
                        <h3>Shipping</h3>
                        <Radio.Group onChange={this.changeShipping} value={this.state.shippingValue}>
                            <Link to='/checkOut/postnord'>
                                <Radio value={1}>PostNord</Radio>
                            </Link>

                            <Link to='/checkOut/DHL'>
                                <Radio value={2}>DHL</Radio>
                            </Link>

                            <Link to="/checkOut/schenker">
                                <Radio value={3}>Schenker</Radio>
                            </Link>
                        </Radio.Group>
                    </Form>

                </div>
                    <Switch>
                        <Route path="/checkOut/postnord">
                            <div>
                                <h3>PostNord</h3>
                                <p>Shipping price: 59kr</p>
                                <p>{this.context.total}kr + 59kr</p>
                                <h3 style={{ color: 'red' }}>Total: {this.context.total + 59}kr</h3>
                            </div>      
                        </Route>
                        <Route path="/checkOut/DHL">
                            <div>
                                <h3>DHL</h3>
                                <p>Shipping price: 79kr</p>
                                <p>{this.context.total}kr + 79kr</p>
                                <h3 style={{ color: 'red' }}>Total: {this.context.total + 79}kr</h3>
                            </div>      
                        </Route>
                        <Route path="/checkOut/schenker">
                            <div>
                                <h3>Schenker</h3>
                                <p>Shipping price: 109kr</p>
                                <p>{this.context.total}kr + 109kr</p>
                                <h3 style={{ color: 'red' }}>Total: {this.context.total + 109}kr</h3>
                            </div>      
                        </Route>
                    </Switch>
               
            </div>
            </>
        )
    }
}

// Det ska även här gå att välja mellan minst tre olika betalsätt (kort & Swish skall finnas). 
// Varje betalsätt ska innehålla ett formulär för nödvändig information. 
// Fälten i formuläret ska gå att automatisk fyllas i. 
// Telefonnumret för Swish ska automatiskt fyllas i med vad som angavs under 
// Dina uppgifter sektionen.
export default CheckOut;