import { Component, ContextType} from "react";
import { CartContext } from "../context/CartContext";
import "../css/layout.css";
import { Result } from "antd";

interface State {
    confirmArray: any[],
}


class Confirm extends Component<{}, State> {
    context!: ContextType<typeof CartContext>;
    static contextType = CartContext;

    state: State = {
        confirmArray: [],
    }

    
    componentDidMount() {
        
        const newArray = this.state.confirmArray.concat(...this.context.cart, this.state.confirmArray)
        this.setState({
            confirmArray: newArray,
            
        })
        
        this.context.emptyCart();
    
    }
 
    render() {
        
        const orderNumber = Math.floor(Math.random() * 1000000)
        
        
        return (
            
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', flexDirection: 'column' }}>
            
                <Result style={{padding: "0"}}
                    status="success"
                    title="Successfully Purchased"
                    />
                    <p style={{ color: 'grey' }}>Your order number: {orderNumber}</p>
                {
                    this.state.confirmArray.map((item, index) => ( 
                        <div key={index} className="flex centerY centerX">
                            <h2>
                                {item.productName} x
                                {item.count}
                            </h2>
                        </div>
                    ))
                }
            
            
            </div>
            
        );
        }
}

export default Confirm;
