
import { Form } from 'antd';
import "../css/layout.css";
import "../css/checkOut.css";
import AdminForm from "./adminForm";
import Crud from "./Crud";
import { ProductContext } from "../context/ProductContext";
import { useContext } from "react"

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

            console.log(values)
            context.addProduct(values)
            } 
            
            catch (errorInfo) {
            console.log("Failed:", errorInfo);
        }
  };


    
    return (
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
                                <Crud key={p.id} delete={context.remove} productName={p.productName} id={p.id} description={p.description} price={p.price} image={p.img} /> 
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
                    <AdminForm  check={onCheck}/>
                    </Form>


                </div>

            </div>

        </div>
    )
}


export default Admin;

