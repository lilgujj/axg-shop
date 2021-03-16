import { Button, Form, Input, Radio } from "antd";
import  { useContext, useState } from "react";
import shopImg from "../images/shop-img.jpg";
import "../css/layout.css"
import "../css/checkOut.css"
import { CartContext } from "../context/CartContext";



interface PersonalData {
    name: string | number | (string | number)[];
    value?: any;
    touched?: boolean;
    validating?: boolean;
    errors?: string[];
  }

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        }
    };

    const CheckOut = () => {
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
        <>

         <img className="imageBack" src={shopImg} alt=""/>
            <h1 style={{ textAlign: 'center', marginTop: '30rem' }}>Payment</h1>
            <div className="flex-col centerY centerX" style={{marginTop: "5rem", marginBottom: "1rem"}}>
                <div className="formBorder" style={{margin: ".5rem 0"}}>

                <Form form={form} name="dynamic_rules" className="flex-col centerY centerX" 
                fields={personalInfo} 
                onFieldsChange={(_, allFields) => onChangePersonal(allFields)} 
                validateMessages={validateMessages}>
                    <h3>Personal Information</h3>
                    <Form.Item name="firstname" label="Firstname" rules={[{ required: true}]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="lastname" label="Lastname" rules={[{ required: true}]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="email" label="Email" rules={[{ required: true, type: "email"}]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={["phone"]} label="Phone Number" rules={[{ required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="adress" label="Adress" rules={[{ required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item>
                        <Button onClick={onCheck} type="primary" htmlType="submit">Proceed</Button>
                    </Form.Item>
                </Form>
  
                    {
                        isProceedValid &&(
                            <>
                                <div>
                                    <Radio.Group>
                                        <Radio.Button onClick={showSwish} value="a">Swish</Radio.Button>
                                        <Radio.Button onClick={showKlarna} value="b">Klarna</Radio.Button>
                                        <Radio.Button onClick={showCreditCard} value="c">Credit Card</Radio.Button>
                                    </Radio.Group>
                                    {   
                                        isSwishVisable && (<Input value={personalInfo[3].value}/> )
                                    }
                                    {   
                                        isKlarnaVisable && (<Input value={personalInfo[2].value}/> )
                                    }
                                    {   
                                        isCreditVisable && (
                                            <h2>hej</h2>
                                        )
                                    }
                                </div>
            
                                
                                <div>
                                    <Radio.Group>
                                        <Radio.Button onClick={showPostNord} value="a">Post Nord</Radio.Button>
                                        <Radio.Button onClick={showDhl} value="b">DHL</Radio.Button>
                                        <Radio.Button onClick={showSchenker} value="c">Schenker</Radio.Button>
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

        
        </>
    )
}

export default CheckOut
