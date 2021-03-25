
import { Form, Input, Modal } from 'antd';
import "../css/layout.css";
import "../css/checkOut.css";
import AdminFields from "./adminForm";
import Crud from "./Crud";
import { ProductContext } from "../context/ProductContext";
import React, { useContext, useState } from "react"
import { products } from '../products';


function Admin() {
    
    const context = useContext(ProductContext)
    
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
            context.addProduct(values)
        } catch (errorInfo) {
            console.log("Failed:", errorInfo);
        }
  };



    
    return (

        <ProductContext.Consumer>
            {(item) => {
                return(
        <div className="formContainer flex centerY centerX" >
            <div className="form flex-col centerY centerX">
                <div style={{ margin: ".5rem 0", width: "100%" }}>
                    <div className="flex space-between" style={{ backgroundColor: 'White', padding: '.5rem' }}>
                        <h4 style={{width: "11rem"}}>Product Name</h4>
                        <h4>id</h4>
                        <h4>price</h4>
                        <div></div>
                        <div></div>
                    </div>

                    {
                        context.products.map((p, index) => (
                            <div key={index}>
                                <Crud edit={context.showModal} key={p.id} delete={context.remove} productName={p.productName} id={p.id} description={p.description} price={p.price} image={p.img} /> 
                            </div>
                            ))
                    }

                    <Form
                        form={form}
                        layout="vertical"
                        name="dynamic_rules"
                        className="formInfo flex-col centerY centerX payment"
                        style={{ padding: '1rem', marginTop: '2rem'}}
                        validateMessages={validateMessages}
                    >
                        <AdminFields  check={onCheck}/>
                    </Form>
                            <Modal 
                                title="Basic Modal" 
                                visible={context.isModalVisible} 
                                onOk={() => context.handleOk} 
                                onCancel={context.handleCancel}>

                            <Form
                                form={form}
                                layout="vertical"
                                name="dynamic_rules"
                                fields={context.fieldsInfo}
                                onFieldsChange={(_, allFields) => context.onChangeFields(allFields)}
                                validateMessages={validateMessages}
                            >
                                <Form.Item
                                    style={{ width: "80%" }}
                                    name="productNameModal"
                                    label="Product Name"
                                    rules={[{ required: true }]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    style={{ width: "80%" }}
                                    name="priceModal"
                                    label="Price"
                                    rules={[{ required: true }]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    style={{ width: "80%" }}
                                    name="idModal"
                                    label="Id"
                                    rules={[{ required: true}]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    style={{ width: "80%" }}
                                    name="descriptionModal"
                                    label="Description"
                                    rules={[{ required: true }]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    style={{ width: "80%" }}
                                    name="imgModal"
                                    label="image"
                                    rules={[{ required: true }]}
                                >
                                    <Input />
                                </Form.Item>
                                </Form> 
                            </Modal>

                </div>

            </div>

        </div>

    )
            }}
            
        </ProductContext.Consumer>
    )
}


export default Admin;

