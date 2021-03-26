import { Button, Form, Radio, Spin } from "antd";
import { useState } from "react";
import ShippingOptions from "./shippingOptions";

interface Props {
  check: () => void;
  loading: boolean;
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
        label="PaymentMethod"
      >
        <Radio.Group>
          <div className="radioBtn">
            <Radio.Button
              style={{ margin: ".5rem" }}
              onClick={showPostNord}
              value="PostNord 59kr 8-12 dagar leveranstid"
            >
              PostNord
            </Radio.Button>
            <Radio.Button
              style={{ margin: ".5rem" }}
              onClick={showDhl}
              value="DHL 79kr 6-8 dagar leveranstid"
            >
              DHL
            </Radio.Button>
            <Radio.Button
              style={{ margin: ".5rem" }}
              onClick={showSchenker}
              value="Schenker 99kr 3-5 dagar leveranstid"
            >
              Schenker
            </Radio.Button>
          </div>
        </Radio.Group>
      </Form.Item>

      {isPostNordVisable && (
        <>
          <ShippingOptions time="8-12 dagar leveranstid" name="PostNord" price={59} />
          <Form.Item>
            {!props.loading && (
              <Button onClick={props.check} type="primary" htmlType="submit">
                Place Order
              </Button>
            )
            }
            {props.loading && (
              <Spin />
            )
            }
          </Form.Item>
        </>
      )}

      {isDhlVisable && (
        <>
          <ShippingOptions time="6-8 dagar leveranstid" name="DHL" price={79} />
          <Form.Item>
            {!props.loading && (
              <Button onClick={props.check} type="primary" htmlType="submit">
                Place Order
              </Button>
            )
            }
            {props.loading && (
              <Spin />
            )
            }
          </Form.Item>
        </>
      )}

      {isSchenkerVisable && (
        <>
          <ShippingOptions time="3-5 dagar leveranstid" name="Schenker" price={99} />
          <Form.Item>
            {!props.loading && (
              <Button onClick={props.check} type="primary" htmlType="submit">
                Place Order
              </Button>
            )
            }
            {props.loading && (
              <Spin />
            )
            }
          </Form.Item>
        </>
      )}
    </>
  );
}

export default ShippingFields;