import { Button, Form, Radio } from "antd";
import { useState } from "react";
import ShippingOptions from "./shippingOptions";


interface Props {
    check: () => void;
}

function ShippingFields(props: Props) {

    const [isPostNordVisable, setPostNord] = useState(false);

    const showPostNord = () => {
      setPostNord(!isPostNordVisable);
      setDhl(false);
      setSchenker(false);
    };
    const [isDhlVisable, setDhl] = useState(false);
  
    const showDhl = () => {
      setDhl(!isDhlVisable);
      setPostNord(false);
      setSchenker(false);
    };
    const [isSchenkerVisable, setSchenker] = useState(false);
  
    const showSchenker = () => {
      setSchenker(!isSchenkerVisable);
      setPostNord(false);
      setDhl(false);
    };


    return (
        <>
         <Form.Item
              name="Shipping"
              rules={[{ required: true, message: "Please pick an item!" }]}
              label="Payment Method"
            >
              <Radio.Group>
                <div className="radioBtn">
                  <Radio.Button
                    style={{ margin: ".5rem" }}
                    onClick={showPostNord}
                    value="PostNord 59kr"
                  >
                    PostNord
                  </Radio.Button>
                  <Radio.Button
                    style={{ margin: ".5rem" }}
                    onClick={showDhl}
                    value="DHL 79kr"
                  >
                    DHL
                  </Radio.Button>
                  <Radio.Button
                    style={{ margin: ".5rem" }}
                    onClick={showSchenker}
                    value="Schenker 99kr"
                  >
                    Schenker
                  </Radio.Button>
                </div>
              </Radio.Group>
            </Form.Item>

            {isPostNordVisable && (
              <>
                <ShippingOptions name="PostNord" price={59} />

                <Form.Item>
                  <Button onClick={props.check} type="primary" htmlType="submit">
                    Place Order
                  </Button>
                </Form.Item>
              </>
            )}

            {isDhlVisable && (
              <>
                <ShippingOptions name="DHL" price={79} />

                <Form.Item>
                  <Button onClick={props.check} type="primary" htmlType="submit">
                    Place Order
                  </Button>
                </Form.Item>
              </>
            )}

            {isSchenkerVisable && (
              <>
                <ShippingOptions name="Schenker" price={99} />

                <Form.Item>
                  <Button onClick={props.check} type="primary" htmlType="submit">
                    Place Order
                  </Button>
                </Form.Item>
              </>
            )}
        </>
    );

}

export default ShippingFields;