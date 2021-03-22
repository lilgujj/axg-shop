import { Form, Input } from "antd";



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
            <Form.Item
              style={{ width: "80%" }}
              name="adress"
              label="Adress"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
        </>
    )
}

export default CustomerFields;