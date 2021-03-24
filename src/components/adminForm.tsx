import { Button, Form, Input } from "antd";
import React from "react";
interface Props {
    check: () => void
}

function AdminForm(props: Props) {

    return (
        <>
                <Form.Item
                    style={{ width: "80%" }}
                    name="productname"
                    label="Product Name"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    style={{ width: "80%" }}
                    name="price"
                    label="Price"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    style={{ width: "80%" }}
                    name="id"
                    label="Id"
                    rules={[{ required: true}]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    style={{ width: "80%" }}
                    name="description"
                    label="Description"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    style={{ width: "80%" }}
                    name="image"
                    label="image"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
  
                <Button onClick={props.check}>Add Product</Button>
        </>
    );
}

export default AdminForm;