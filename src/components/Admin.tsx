
import { Form, Modal } from 'antd';
import "../css/layout.css";
import "../css/checkOut.css";
import "../css/admin.css";
import AdminFields from "./adminForm";
import Crud from "./Crud";
import { ProductContext } from "../context/ProductContext";
import React, { useContext } from "react"
import { useState } from 'react';
import { Product } from '../products';
import EditFields from './EditFields';

function Admin() {
    const context = useContext(ProductContext)
    const [editingProduct, setEditingProduct] = useState<Product>();
    
    const validateMessages = {
      required: "required!",
      types: {
        email: "not a valid email!",
        number: "not a valid number!",
      },
    };
    
    const [form] = Form.useForm();
    const onCheck = async () => {
      try {
        const values = await form.validateFields();
        context.addProduct(values)
      } catch (errorInfo) {
        console.log("Failed:", errorInfo);
      }
    };
    
    const [editForm] = Form.useForm();

    // FICK INTE EDIT KNAPPEN ATT FUNGERA!!! 
    // input onChange
    // const onEdit = async () => {
    //     try {
    //         const values = await editForm.validateFields();
    //         console.log(values)
    //         context.confirmEdit(values)
    //     } catch (errorInfo) {
    //         console.log("Failed:", errorInfo);
    //     }
    // }

    return (
        <ProductContext.Consumer>
            {(item) => {
                return (
                  <div className="formContainer flex centerY centerX">
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
                          <tbody>
                            {context.products.map((p) => (
                              <Crud
                                key={p.id}
                                product={p}
                                edit={setEditingProduct}
                                delete={context.remove}
                              />
                            ))}
                          </tbody>
                        </table>
                        <Form
                          form={form}
                          layout="vertical"
                          name="dynamic_rules"
                          className="formInfo flex-col centerY centerX payment"
                          style={{ padding: "1rem", marginTop: "2rem" }}
                          validateMessages={validateMessages}
                        >
                          <AdminFields check={onCheck} />
                        </Form>
                        <Modal
                          forceRender={true}
                          title="Edit Product"
                          visible={Boolean(editingProduct)}
                          onOk={() => setEditingProduct(undefined)}
                          onCancel={() => setEditingProduct(undefined)}
                        >
                          <Form
                            form={editForm}
                            layout="vertical"
                            name="dynamic_rules"

                            validateMessages={validateMessages}
                          >
                            <EditFields product={editingProduct} />
                          </Form>
                        </Modal>
                      </div>
                    </div>
                  </div>
                );
            }}
        </ProductContext.Consumer>
    )
}

export default Admin;

