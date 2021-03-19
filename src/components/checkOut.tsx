import { Button, Form, Input, Radio } from "antd";
import  React, { useContext, useState } from "react";
import "../css/layout.css"
import "../css/checkOut.css"
import { CartContext } from "../context/CartContext";

import {  Redirect } from "react-router-dom";
import { mockApi } from "./confirm";
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
            console.log('Success:', values);
            setProceed(!isProceedValid);
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
        }
        };

        const [isSecondProceedValid, setSecondProceed] = useState(false);

        const onSecondCheck = async () => {
            try {
            const values = await form.validateFields();
            console.log('Success:', values);
            setSecondProceed(!isSecondProceedValid);
          } catch (errorInfo) {
            console.log('Failed:', errorInfo);
          }
        }

        const cart = useContext(CartContext)

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
        ]);

        const [paymentInfo, setPayment] = useState([
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
            }
        ])

        const onChangePersonal = (allFields: any) => {
            setFields(allFields)
        }

        const onChangePayment = (allFields: any) => {
            setPayment(allFields)
        }

        
        const sendMock = async () => {
            let res = await mockApi(personalInfo)
            console.log(res)
            setFinish(true)
        }
    
        const [isBookingFinished, setFinish] = useState(false);

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
                    <Form.Item>
                        <Button  onClick={onCheck} type="primary" htmlType="submit">Proceed</Button>
                    </Form.Item>
                </Form>
  
                    {
                        isProceedValid &&(
                            <>
                                <div className="flex-col centerX centerY payment">
                                    <Radio.Group className="flex centerX centerY">
                                        <div className="radioBtn">
                                            <Radio.Button style={{margin: ".5rem"}} onClick={showSwish} value="a">Swish</Radio.Button>
                                            <Radio.Button style={{margin: ".5rem"}} onClick={showKlarna} value="b">Klarna</Radio.Button>
                                            <Radio.Button style={{margin: ".5rem"}} onClick={showCreditCard} value="c">Credit Card</Radio.Button>
                                        </div>
                                    </Radio.Group>
                                    {   
                                        
                                        isSwishVisable && (
                                            <Form form={form} 
                                            layout="vertical" 
                                            validateMessages={validateMessages} 
                                            name="dynamic_rules" 
                                            className="flex-col centerY centerX paymentItem">
                                                <Form.Item style={{width: "80%"}} label="Phone Number" rules={[{ required: true}]}>
                                                    <Input value={personalInfo[3].value}/> 
                                                </Form.Item>
                                                <Form.Item>
                                                    <Button type="primary" htmlType="submit" onClick={onSecondCheck}>Proceed</Button>
                                                </Form.Item>
                                            </Form>
                                        )
                                    }
                                    {   
                                        isKlarnaVisable && (
                                            <Form form={form} 
                                            layout="vertical" 
                                            validateMessages={validateMessages}  
                                            name="dynamic_rules" 
                                            className="flex-col centerY centerX paymentItem">
                                                <Form.Item style={{width: "80%"}} label="Email" rules={[{ required: true}]}>
                                                    <Input value={personalInfo[2].value}/> 
                                                </Form.Item>
                                                <Form.Item>
                                                    <Button type="primary" htmlType="submit" onClick={onSecondCheck}>Proceed</Button>
                                                </Form.Item>
                                            </Form>
                                        )
                                    }
                                    {   
                                        isCreditVisable && (
                                            <Form form={form} 
                                            layout="vertical" 
                                            validateMessages={validateMessages}
                                            onFieldsChange={(_, allFields) => onChangePayment(allFields)} 
                                            fields={paymentInfo}  
                                            name="dynamic_rules" 
                                            className="flex-col centerY centerX paymentItem">
                                                <Form.Item style={{width: "80%"}} name="Full Name" label="Full Name" rules={[{ required: true}]}>
                                                    <Input/> 
                                                </Form.Item>
                                                <Form.Item style={{width: "80%"}} name="Card Number" label="Card Number" rules={[{ required: true}]}>
                                                    <Input/> 
                                                </Form.Item>
                                                <div className="flex centerX centerY">
                                                    <Form.Item style={{width: "80%"}} name="MM/YY" label="MM / YY" rules={[{ required: true}]}>
                                                        <Input/> 
                                                    </Form.Item>
                                                    <Form.Item style={{width: "80%"}} name="CVC" label="CVC" rules={[{ required: true}]}>
                                                        <Input/> 
                                                    </Form.Item>
                                                </div>
                                                <Form.Item>
                                                    <Button type="primary" htmlType="submit" onClick={onSecondCheck}>Proceed</Button>
                                                </Form.Item>
                                            </Form>
                                        )
                                    }
                                </div>
            
                                {
                                    isSecondProceedValid && (
                                        <>
                                <div className="payment flex-col centerY centerX">
                                    <Radio.Group >
                                        <div className="radioBtn">
                                            <Radio.Button style={{margin: ".5rem"}} onClick={showPostNord} value="a">PostNord</Radio.Button>
                                            <Radio.Button style={{margin: ".5rem"}} onClick={showDhl} value="b">DHL</Radio.Button>
                                            <Radio.Button style={{margin: ".5rem"}} onClick={showSchenker} value="c">Schenker</Radio.Button>
                                        </div>
                                    </Radio.Group>
                                    {   
                                        isPostNordVisable && (
                                            <div className="flex-col centerY centerX">
                                                <ShippingOptions 
                                                name="PostNord" 
                                                price={59}
                                                />
                                                <Button onClick={sendMock} type="primary" htmlType="submit">Place order</Button>
                                            </div>
                                            )
                                    }
                                    {   
                                        isDhlVisable && ( 
                                            <div className="flex-col centerY centerX">
                                                <ShippingOptions 
                                                    name="DHL"
                                                    price={79}                                     
                                                    />
                                                <Button onClick={sendMock} type="primary" htmlType="submit">Place order</Button>
                                            </div> 
                                            )
                                    }
                                    {   
                                        isSchenkerVisable && (
                                            <div className="flex-col centerY centerX">
                                                <ShippingOptions 
                                                    name="Schenker"
                                                    price={99}
                                                />
                                                <Button onClick={sendMock} type="primary" htmlType="submit">Place order</Button>

                                            </div>
                                        )
                                    }
                                </div>

                                    </>
                                    )
                                }

                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default CheckOut
