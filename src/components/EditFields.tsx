import { Form } from "antd";
import React from "react";
import { Product } from "../products"

interface Props {
    product?: Product;

}

function EditFields(props: Props) {

    const { product } = props;

    if(!product) {
        return <h2>EDIT NOT WORKING</h2>
    }

    return(
        <>
        <Form.Item
            style={{ width: "80%" }}
            name="productNameEdit"
            label="Product Name"
            >
                <h3>{product.productName}</h3>
       
        </Form.Item>
        <Form.Item
            style={{ width: "80%" }}
            name="priceEdit"
            label="Price"
        >
                <h3>{product.price}</h3>
          
        </Form.Item>
        <Form.Item
            style={{ width: "80%" }}
            name="idEdit"
                label="Id"
        
        >
                <h3>{product.id}</h3>
      
        </Form.Item>
        <Form.Item
            style={{ width: "80%" }}
            name="descriptionEdit"
                label="Description"

        >
            <h3>{product.description}</h3>
     
        </Form.Item>
        <Form.Item
            style={{ width: "80%" }}
            name="imgEdit"
            label="image"
    
        >
            <h3>{product.img}</h3>
       
        </Form.Item>

   
    </>

    )

}

export default EditFields;