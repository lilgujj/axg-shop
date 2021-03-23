import { Form, Input } from "antd";
import "../css/checkOut.css"

function CustomerFields() {
    return (
        <>
            <h3 style={{ paddingTop: "1rem" }}>Personal Information</h3>

            <Form.Item
              style={{ width: "80%" }}
              name="firstname"
              label="Firstname"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              style={{ width: "80%" }}
              name="lastname"
              label="Lastname"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              style={{ width: "80%" }}
              name="email"
              label="Email"
              rules={[{ required: true, type: "email" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              style={{ width: "80%" }}
              name={["phone"]}
              label="Phone Number"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <div style={{ width: "100%" }} className="customerField flex centerX centerY">
              <Form.Item
                name="adress"
                label="Adress"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item 
                name="ZipCode"
                label="Zip Code"
                rules={[{ required: true }]}>
                  <Input />
              </Form.Item>
              <Form.Item 
                name="City"
                label="City"
                rules={[{ required: true }]}>
                  <Input />
              </Form.Item>
            </div>
        </>
    )
}

export default CustomerFields;