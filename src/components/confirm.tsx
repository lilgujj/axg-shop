import { Component, ContextType, useDebugValue } from "react";
import { CartContext } from "../context/CartContext";
import "../css/layout.css";
import { Button, Result } from "antd";
import { PersonalData } from "./checkOut";

interface State {
    confirmArray: any[],
    isLoading: boolean,
}

export async function mockApi(values: {}) {
    await timeOut()
    console.log(values)
    return values
}

async function timeOut() {
    return new Promise(resolve => setTimeout(resolve, 2000))
}

class Confirm extends Component<{}, State> {
    context!: ContextType<typeof CartContext>;
    static contextType = CartContext;

    state: State = {
        confirmArray: [],
        isLoading: true,
      
    
    }

    async componentDidMount() {
        const res = await mockApi({
            firstname: "",
            lastname: "",
            email: "",
            phone: "", 
            adress: "",
        })
        console.log(res)


        this.setState({
            confirmArray: [...this.context.cart],
            isLoading: false
        })
    }


    
    render() {
        
        const orderNumber = Math.floor(Math.random() * 1000000)
        

        const confirmArray = this.state.confirmArray;

        return (
            
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', flexDirection: 'column' }}>
            { this.state.isLoading === false &&(
                <>
                <Result style={{padding: "0"}}
                    status="success"
                    title="Successfully Purchased"
                    />
                    <p style={{ color: 'grey' }}>Your order number: {orderNumber}</p>
                {
                    confirmArray.map((item) => ( 
                        
                        <div className="flex centerY centerX">
                            <h2>
                                {item.productName} x
                                {item.count}
                                {/* {this.state.personalData[0].name} */}
                            </h2>
                        </div>
                    ))
                }
                </>
            ) 
                
            }
            
            </div>
            
        );
        }
}

export default Confirm;
