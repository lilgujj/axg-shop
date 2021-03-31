import { Form, Input } from "antd";
import React from "react";
import { Product } from "../products"

interface Props {
    product?: Product;
    check: () => void
}

function EditFields(props: Props) {
 const { product } = props;
    return(
        <>
        <Form.Item
            style={{ width: "80%" }}
            name="productNameEdit"
            label="Product Name"
            rules={[{ required: true }]}
        >
            <Input defaultValue={product?.productName} />
        </Form.Item>
        <Form.Item
            style={{ width: "80%" }}
            name="priceEdit"
            label="Price"
            rules={[{ required: true }]}
        >
            <Input defaultValue={product?.price}/>
        </Form.Item>
        <Form.Item
            style={{ width: "80%" }}
            name="idEdit"
            label="Id"
            rules={[{ required: true }]}
        >
            <Input defaultValue={product?.id}/>
        </Form.Item>
        <Form.Item
            style={{ width: "80%" }}
            name="descriptionEdit"
            label="Description"
            rules={[{ required: true }]}
        >
            <Input defaultValue={product?.description}/>
        </Form.Item>
        <Form.Item
            style={{ width: "80%" }}
            name="imgEdit"
            label="image"
            rules={[{ required: true }]}
        >
            <Input defaultValue={product?.img}/>
        </Form.Item>
    </>

    )
}

export default EditFields;