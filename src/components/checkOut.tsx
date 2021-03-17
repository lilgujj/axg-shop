import { Button, Form, Input, Radio } from "antd";
import  { useContext, useState } from "react";
import shopImg from "../images/shop-img.jpg";
import "../css/layout.css"
import "../css/checkOut.css"
import { CartContext } from "../context/CartContext";
import React from "react";



interface PersonalData {
    name: string | number | (string | number)[];
    value?: any;
    touched?: boolean;
    validating?: boolean;
    errors?: string[];
  }

  
  const CheckOut = () => {

        const validateMessages = {
            required: '${label} is required!',
            types: {
                email: '${label} is not a valid email!',
                number: '${label} is not a valid number!',
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
        const cart = useContext(CartContext)

        const [personalInfo, setFields] = useState<PersonalData[]>([
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
            setDhl(!isKlarnaVisable)
            setPostNord(false)
            setSchenker(false)
            
        }
        const [isSchenkerVisable, setSchenker] = useState(false)

        const showSchenker = () => {
            setSchenker(!isCreditVisable)
            setPostNord(false)
            setDhl(false)
            
        }

        

        const onChangePersonal = (allFields: any) => {
            setFields(allFields)
        }
        
    return(
        <div className="formContainer flex centerY centerX"> 
            <div className="form formBorder flex-col centerY centerX" style={{marginTop: "5rem", marginBottom: "1rem"}}>
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
                                        <Radio.Button style={{margin: ".5rem"}} onClick={showSwish} value="a">Swish</Radio.Button>
                                        <Radio.Button style={{margin: ".5rem"}} onClick={showKlarna} value="b">Klarna</Radio.Button>
                                        <Radio.Button style={{margin: ".5rem"}} onClick={showCreditCard} value="c">Credit Card</Radio.Button>
                                    </Radio.Group>
                                    {   
                                        
                                        isSwishVisable && (
                                            <Form layout="vertical" className="flex centerY centerX paymentItem">
                                                <Form.Item style={{width: "80%"}} label="Phone Number">
                                                    <Input value={personalInfo[3].value}/> 
                                                </Form.Item>
                                            </Form>
                                        )
                                    }
                                    {   
                                        isKlarnaVisable && (
                                            <Form layout="vertical" className="flex-col centerY centerX paymentItem">
                                                <Form.Item style={{width: "80%"}} label="Email">
                                                    <Input value={personalInfo[2].value}/> 
                                                </Form.Item>
                                            </Form>
                                        )
                                    }
                                    {   
                                        isCreditVisable && (
                                            <Form layout="vertical" className="flex-col centerY centerX paymentItem">
                                                <Form.Item style={{width: "80%"}} label="Full Name">
                                                    <Input/> 
                                                </Form.Item>
                                                <Form.Item style={{width: "80%"}} label="Card Number">
                                                    <Input/> 
                                                </Form.Item>
                                                <div className="flex centerX centerY">
                                                    <Form.Item style={{width: "80%"}} label="MM / YY">
                                                        <Input/> 
                                                    </Form.Item>
                                                    <Form.Item style={{width: "80%"}} label="CVC">
                                                        <Input/> 
                                                    </Form.Item>
                                                </div>
                                            </Form>
                                        )
                                    }
                                </div>
            
                                
                                <div className="payment flex-col centerY centerX">
                                    <Radio.Group>
                                        <Radio.Button style={{margin: ".5rem"}} onClick={showPostNord} value="a">Post Nord</Radio.Button>
                                        <Radio.Button style={{margin: ".5rem"}} onClick={showDhl} value="b">DHL</Radio.Button>
                                        <Radio.Button style={{margin: ".5rem"}} onClick={showSchenker} value="c">Schenker</Radio.Button>
                                    </Radio.Group>
                                    {   
                                        isPostNordVisable && (
                                            <div>
                                                <h2>Shipping price: 59kr</h2>
                                                <p>{cart.total}kr + 59kr</p>
                                                <h3 style={{ color: 'red' }}>Total: {cart.total + 59}kr</h3>
                                            </div>
                                            )
                                    }
                                    {   
                                        isDhlVisable && ( <h2>DHL</h2> )
                                    }
                                    {   
                                        isSchenkerVisable && (
                                            <h2>Schenker</h2>
                                        )
                                    }
                                </div>
                                <Button type="primary" htmlType="submit">Place order</Button>           

                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default CheckOut
