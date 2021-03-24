import { CartContext } from "../context/CartContext";
import React, { useContext } from 'react';
import { Product, products } from "../products";
import { Button, Form, Input, Upload } from 'antd'
import "../css/layout.css";
import "../css/checkOut.css";
import { InboxOutlined } from "@ant-design/icons";
import AdminForm from "./adminForm";
import Crud from "./Crud";


function Admin() {
    const context = useContext(CartContext)
    const [form] = Form.useForm();

    const validateMessages = {
        required: "required!",
        types: {
        email: "not a valid email!",
        number: "not a valid number!",
        },
    };
    
    const onCheck = async () => {
    try {
      const values = await form.validateFields();
      console.log(values)
      addProduct(values)
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };

    const addProduct = (values: any) => {
        products.push({
            productName: values.productname,
            price: values.price,
            id: values.id,
            img: values.image,
            description: values.description
        })
    }

    const remove = (id: string) => {

        products.forEach((item, index) => {
            if(item.productName === id) {
                products.splice(index, 1)
            
            } 
    })
}
    
    return (
        <div className="formContainer flex centerY centerX" >
            <div className="form flex-col centerY centerX">
                <div style={{ margin: ".5rem 0", width: "100%" }}>
                    <div className="flex space-between">
                        <h4 style={{width: "11rem"}}>Product Name</h4>
                        <h4>id</h4>
                        <h4>price</h4>
                        <div></div>
                        <div></div>
                    </div>

                    {
                        products.map((p) => (
                            <>
                            <Crud delete={remove} productName={p.productName} id={p.id} description={p.description} price={p.price} image={p.img} /> 
                            </>
                            ))
                    }
                    <Form
                        form={form}
                        layout="vertical"
                        name="dynamic_rules"
                        className="formInfo flex-col centerY centerX payment"
                        style={{ padding: '1rem' }}
                        validateMessages={validateMessages}
                    >
                    <AdminForm  check={onCheck}/>
                    </Form>


                </div>

            </div>

        </div>
    )
}


export default Admin;

