import { Form, Input, Radio } from "antd";
import React, { useState } from "react";

interface Props {
    phoneNumber: any;
    email: any;
}

function PaymentFields(props: Props) {


    const [isSwishVisable, setSwish] = useState(false);

    const showSwish = () => {
      setSwish(!isSwishVisable);
      setKlarna(false);
      setCredit(false);
    };
    const [isKlarnaVisable, setKlarna] = useState(false);
  
    const showKlarna = () => {
      setKlarna(!isKlarnaVisable);
      setSwish(false);
      setCredit(false);
    };
    const [isCreditVisable, setCredit] = useState(false);
  
    const showCreditCard = () => {
      setCredit(!isCreditVisable);
      setKlarna(false);
      setSwish(false);
    };
    
    return (
    <div>
        <Form.Item
              name="Payment Method"
              rules={[{ required: true, message: "Please pick an item!" }]}
              label="Payment Method"
            >
              <Radio.Group className="flex centerX centerY">
                <div className="radioBtn">
                  <Radio.Button
                    style={{ margin: ".5rem" }}
                    onClick={showSwish}
                    value="Swish"
                  >
                    Swish
                  </Radio.Button>
                  <Radio.Button
                    style={{ margin: ".5rem" }}
                    onClick={showKlarna}
                    value="Klarna"
                  >
                    Klarna
                  </Radio.Button>
                  <Radio.Button
                    style={{ margin: ".5rem" }}
                    onClick={showCreditCard}
                    value="Credit Card"
                  >
                    Credit Card
                  </Radio.Button>
                </div>
              </Radio.Group>
            </Form.Item>
       
            {isSwishVisable && (
              <Form.Item
                style={{ width: "80%" }}
                label="Phone Number"
                rules={[{ required: true }]}
              >
                <Input value={props.phoneNumber} />
              </Form.Item>
            )}

            {isKlarnaVisable && (
           
              <Form.Item
                style={{ width: "80%" }}
                label="Email"
                rules={[{ required: true }]}
              >
                <Input value={props.email} />
              </Form.Item>
           
            )}
            
            {isCreditVisable && (
                <div>
                <Form.Item
                  style={{ width: "80%" }}
                  name="Full Name"
                  label="Full Name"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  style={{ width: "80%" }}
                  name="Card Number"
                  label="Card Number"
                  rules={[{ required: true }]}
                >
                  <Input max={10} />
                </Form.Item>
                <div className="flex centerX centerY">
                  <Form.Item
                    style={{ width: "80%" }}
                    name="MM/YY"
                    label="MM / YY"
                    rules={[{ required: true }]}
                  >
                    <Input max={3} />
                  </Form.Item>
                  <Form.Item
                    style={{ width: "80%" }}
                    name="CVC"
                    label="CVC"
                    rules={[{ required: true }]}
                  >
                    <Input max={3} />
                  </Form.Item>
                </div>
                </div>
            )}            
        </div>


     )
    
}

export default PaymentFields;