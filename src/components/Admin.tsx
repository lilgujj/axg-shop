
import { Form, Input, Modal } from 'antd';
import "../css/layout.css";
import "../css/checkOut.css";
import "../css/admin.css";
import AdminFields from "./adminForm";
import Crud from "./Crud";
import { ProductContext } from "../context/ProductContext";
import React, { useContext } from "react"

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
                return (
                    <div className="formContainer flex centerY centerX" >
                        <div className="form flex-col centerY centerX">
                            <div className="adminContainer">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Product Name</th>
                                            <th>Id</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>

                                    {
                                        context.products.map((p) => (
                                                <Crud edit={context.showModal} key={p.id} delete={context.remove} productName={p.productName} id={p.id} description={p.description} price={p.price} image={p.img} />
                                        ))
                                    }
                                </table>
                                <Form
                                    form={form}
                                    layout="vertical"
                                    name="dynamic_rules"
                                    className="formInfo flex-col centerY centerX payment"
                                    style={{ padding: '1rem', marginTop: '2rem' }}
                                    validateMessages={validateMessages}
                                >
                                    <AdminFields check={onCheck} />
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
                                            rules={[{ required: true }]}
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

