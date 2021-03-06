import { Form, } from "antd";
import { useState } from "react";
import "../css/layout.css";
import "../css/checkOut.css";
import { Redirect } from "react-router-dom";
import { mockApi } from "../mockApi";
import CustomerFields from "./customerFields";
import PaymentFields from "./paymentFields"
import ShippingFields from "./shippingFields"

export interface PersonalData {
  name: string | number | (string | number)[];
  value?: any;
  touched?: boolean;
  validating?: boolean;
  errors?: string[];
}

const CheckOut = () => {

  const validateMessages = {
    required: "required!",
    types: {
      email: "not a valid email!",
      number: "not a valid number!",
    },
  };

  const [form] = Form.useForm();
  const [isProceedValid, setProceed] = useState(false);
  const [loading, setLoading] = useState(false);

  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      const allInformation = {
        user: {
          firstname: values.firstname,
          lastname: values.lastname,
          adress: values.adress,
          ZipCode: values.ZipCode,
          City: values.City,
          phone: values.phone,
          email: values.email,
        },
        shippingAndPayment: {
          PaymentMethod: values.PaymentMethod,
          Shipping: values.Shipping,
          FullName: values.FullName,
          CardNumber: values.CardNumber,
          CVC: values.CVC,
          MMYY: values.MMYY,
          phone: values.phone,
          email: values.email
        }
      }

      setProceed(!isProceedValid);
      setLoading(!loading)
      await mockApi(allInformation);
      setFinish(true);
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };

  const onChangePersonal = (allFields: any) => {
    setFields(allFields);
  };

  const [personalInfo, setFields] = useState([
    {
      name: ["firstname"],
      value: "",
    },
    {
      name: ["lastname"],
      value: "",
    },
    {
      name: ["email"],
      value: "",
    },
    {
      name: ["adress"],
      value: "",
    },
    {
      name: ["phone"],
      value: "",
    },
    {
      name: ["Full Name"],
      value: "",
    },
    {
      name: ["Card Name"],
      value: "",
    },
    {
      name: ["MM/YY"],
      value: "",
    },
    {
      name: ["CVC"],
      value: "",
    },
  ]);

  const [isBookingFinished, setFinish] = useState(false);

  if (isBookingFinished) {
    return <Redirect to="/confirm" />;
  }
  return (
    <div className="formContainer flex centerY centerX">
      <div className="form flex-col centerY centerX">
        <div style={{ margin: ".5rem 0", width: "100%" }}>
          <Form
            form={form}
            layout="vertical"
            name="dynamic_rules"
            className="formInfo flex-col centerY centerX payment"
            fields={personalInfo}
            onFieldsChange={(_, allFields) => onChangePersonal(allFields)}
            validateMessages={validateMessages}
          >
            <CustomerFields />

            <PaymentFields phoneNumber={personalInfo[3].value} email={personalInfo[2].value} />

            <ShippingFields check={onCheck} loading={loading} />

          </Form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
