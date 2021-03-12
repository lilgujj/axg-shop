import { Button, Form, Input, Radio, Select } from "antd";
import { AntTreeNode, AntTreeNodeProps } from "antd/lib/tree";
import React, { Component, useDebugValue } from "react";
import shopImg from "../images/shop-img.jpg";
import "../css/layout.css"
import "../css/checkOut.css"


interface State {
    value: number
}

class CheckOut extends Component<{}, State> {


    state = {
        value: 0,
    };

    onChange = (e: any) => {
        console.log('radio checked', e.target.value);
        const value = e.target.value
        this.setState({
            value: value
        });
    };

    render() {

        // const { value } = this.state

      
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
                        <Form.Item name="phone" label="Phone Number" rules={[{ required: true, type: "number"}]}>
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
                        <Radio.Group onChange={this.onChange} value={this.state.value}>
                            <Radio onClick={() => {console.log(this.state.value)}}value={1}>Swish</Radio>
                            <Radio onClick={() => {console.log(this.state.value)}} value={2}>Credit Card</Radio>
                            <Radio onClick={() => {console.log(this.state.value)}}value={3}>Bitcoin</Radio>
                        </Radio.Group>
                    </Form>
                 
                </div>

               
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