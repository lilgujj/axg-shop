import { Component, ContextType} from "react";
import { CartContext } from "../context/CartContext";
import "../css/layout.css";
import { Result } from "antd";

interface State {
    confirmArray: any[],
    isLoading: boolean
}


class Confirm extends Component<{}, State> {
    context!: ContextType<typeof CartContext>;
    static contextType = CartContext;

    state: State = {
        confirmArray: [],
        isLoading: true
    
    }

    async componentDidMount() {

        this.setState({
            confirmArray: [...this.context.cart],
            isLoading: false
        })

        // this.context.cart = []
        // console.log(this.context.cart)
        // console.log(this.state.confirmArray)
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
                    this.context.cart.map((item, index) => ( 
                        <div key={index} className="flex centerY centerX">
                            <h2>
                                {item.productName} x
                                {item.count}
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
