import { Button, Form, Input, Radio } from "antd";
import  React, { useState } from "react";
import "../css/layout.css"
import "../css/checkOut.css"

import {  Redirect } from "react-router-dom";
import { mockApi } from "../mockApi";
import ShippingOptions from "./shippingOptions";



export interface PersonalData {
    name: string | number | (string | number)[];
    value?: any;
    touched?: boolean;
    validating?: boolean;
    errors?: string[];
  }

  
  
const CheckOut = () => {
    const validateMessages = {
        required: 'required!',
        types: {
            email: 'not a valid email!',
            number: 'not a valid number!',
        }
    };
    
    const [form] = Form.useForm();
    
    const [isProceedValid, setProceed] = useState(false)
    
        const onCheck = async () => {
        try {
            const values = await form.validateFields();
            setProceed(!isProceedValid);

            await mockApi(values)
            setFinish(true)


         
            
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
        }
    };
    
    
        const onChangePersonal = (allFields: any) => {
            setFields(allFields)
        }

        const [personalInfo, setFields] = useState([
            { 
                name: ['firstname'], value: '',
            },
            {
                name: ['lastname'], value: ''
            },
            {
                name: ['email'], value: ''
            },
            {
                name: ['adress'], value: ''
            },
            {
                name: ['phone'], value: ''
            },
            {
                name: ['Full Name'], value: ''
            },
            {
                name: ['Card Name'], value: ''
            },
            {
                name: ['MM/YY'], value: ''
            },
            {
                name: ['CVC'], value: ''
            },
            
        ]); 

        const [isSwishVisable, setSwish] = useState(false)

        const showSwish = () => {
            setSwish(!isSwishVisable)
            setKlarna(false)
            setCredit(false)
        }
        const [isKlarnaVisable, setKlarna] = useState(false)

        const showKlarna = () => {
            setKlarna(!isKlarnaVisable)
            setSwish(false)
            setCredit(false)
            
        }
        const [isCreditVisable, setCredit] = useState(false)

        const showCreditCard = () => {
            setCredit(!isCreditVisable)
            setKlarna(false)
            setSwish(false)
            
        }
        const [isPostNordVisable, setPostNord] = useState(false)

        const showPostNord = () => {
            setPostNord(!isPostNordVisable)
            setDhl(false)
            setSchenker(false)
        }
        const [isDhlVisable, setDhl] = useState(false)

        const showDhl = () => {
            setDhl(!isDhlVisable)
            setPostNord(false)
            setSchenker(false)
            
        }
        const [isSchenkerVisable, setSchenker] = useState(false)

        const showSchenker = () => {
            setSchenker(!isSchenkerVisable)
            setPostNord(false)
            setDhl(false)
            
        }

        const [isBookingFinished, setFinish] = useState(false);

        if(isBookingFinished){
           return <Redirect to="/confirm" />
        }
    return(

        <div className="formContainer flex centerY centerX"> 
            <div className="form flex-col centerY centerX" style={{marginTop: "5rem", marginBottom: "1rem"}}>
                <div style={{margin: ".5rem 0", width: "100%"}}>

                <Form form={form} layout="vertical" name="dynamic_rules" className="formInfo flex-col centerY centerX payment" 
                    fields={personalInfo} 
                    onFieldsChange={(_, allFields) => onChangePersonal(allFields)} 
                    validateMessages={validateMessages}>
                
                    <h3 style={{paddingTop: "1rem"}}>Personal Information</h3>
                    
                    <Form.Item style={{width: "80%"}} name="firstname" label="Firstname" rules={[{ required: true}]}>
                            <Input/>
                    </Form.Item>
                    <Form.Item style={{width: "80%"}} name="lastname" label="Lastname" rules={[{ required: true}]}>
                        <Input />
                    </Form.Item>
                    <Form.Item style={{width: "80%"}} name="email" label="Email" rules={[{ required: true, type: "email"}]}>
                        <Input />
                    </Form.Item>
                    <Form.Item style={{width: "80%"}} name={["phone"]} label="Phone Number" rules={[{ required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item style={{width: "80%"}} name="adress" label="Adress" rules={[{ required: true}]}>
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        name="Payment Method"
                        rules={[{ required: true, message: 'Please pick an item!' }]}
                         label="Payment Method"
                     >
                        <Radio.Group 
                        className="flex centerX centerY"
                        
                        >
                            <div className="radioBtn">
                                <Radio.Button style={{margin: ".5rem"}} onClick={showSwish} value="Swish">Swish</Radio.Button>
                                <Radio.Button style={{margin: ".5rem"}} onClick={showKlarna}  value="Klarna">Klarna</Radio.Button>
                                <Radio.Button style={{margin: ".5rem"}} onClick={showCreditCard}  value="Credit Card">Credit Card</Radio.Button>
                            </div>
                        </Radio.Group>
                    </Form.Item>

                    {
                        
                        isSwishVisable && (
                            
                            <Form.Item style={{width: "80%"}} label="Phone Number" rules={[{ required: true}]}>
                                <Input value={personalInfo[3].value}/>
                            </Form.Item>

                        ) 
                    }

                    { isKlarnaVisable && (

                            <Form.Item style={{width: "80%"}} label="Email" rules={[{ required: true}]}>
                                <Input value={personalInfo[2].value}/> 
                            </Form.Item>
                        )
                    }

                    {   isCreditVisable && (
                        <>
                            <Form.Item style={{width: "80%"}} name="Full Name" label="Full Name" rules={[{ required: true}]}>
                                <Input/> 
                            </Form.Item>
                            <Form.Item style={{width: "80%"}} name="Card Number" label="Card Number" rules={[{ required: true }]}>
                                <Input max={10}/> 
                            </Form.Item>
                            <div className="flex centerX centerY">
                                <Form.Item style={{width: "80%"}} name="MM/YY" label="MM / YY" rules={[{ required: true}]}>
                                    <Input max={3}/> 
                                </Form.Item>
                                <Form.Item style={{width: "80%"}} name="CVC" label="CVC" rules={[{ required: true}]}>
                                    <Input max={3}/> 
                                </Form.Item>
                            </div>
                        </>
                        )
                    }

                    <Form.Item
                    
                    name="Shipping"
                    rules={[{ required: true, message: 'Please pick an item!' }]}
                     label="Payment Method">
                        <Radio.Group >
                            <div className="radioBtn">
                                <Radio.Button style={{margin: ".5rem"}} onClick={showPostNord} value="PostNord 59kr">PostNord
                                </Radio.Button>            
                                <Radio.Button style={{margin: ".5rem"}} onClick={showDhl} value="DHL 79kr">DHL
                                </Radio.Button>
                                <Radio.Button style={{margin: ".5rem"}} onClick={showSchenker} value="Schenker 99kr">Schenker
                                </Radio.Button>
                            </div>
                        </Radio.Group>
                    </Form.Item>
                    
                    { isPostNordVisable && (
                        <>
                        <ShippingOptions name="PostNord" price={59}/>

                       <Form.Item>
                            <Button onClick={onCheck} type="primary" htmlType="submit">Place Order</Button>
                       </Form.Item>
                        </>
                        )
                    }

                    {
                        isDhlVisable && (
                            <>
                                <ShippingOptions name="DHL" price={79}/>

                                <Form.Item>
                                    <Button  onClick={onCheck} type="primary" htmlType="submit">Place Order
                                    </Button>   
                                </Form.Item>
                            </>
                        )
                    }

                    { isSchenkerVisable && (
                        <>
                            <ShippingOptions name="Schenker" price={99}/>

                            <Form.Item>
                                    <Button 
                                        onClick={onCheck} 
                                        type="primary" 
                                        htmlType="submit"
                                        >
                                        Place Order
                                    </Button>
                            </Form.Item>
                       </>
                    )

                    }
     
                </Form>
                </div>
            </div>
        </div>
            )
}



export default CheckOut
