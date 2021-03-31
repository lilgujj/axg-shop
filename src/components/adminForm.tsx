import { Button, Form, Input } from "antd";

interface Props {
    check: () => void
}

function AdminFields(props: Props) {
    return (
        <>
            <Form.Item
                style={{ width: "80%" }}
                name="productName"
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
                rules={[{ required: true }]}
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
                name="img"
                label="image"
                rules={[{ required: true }]}
            >
                <Input />
            </Form.Item>
            <Button onClick={props.check}>Add Product</Button>
        </>
    );
}

export default AdminFields;