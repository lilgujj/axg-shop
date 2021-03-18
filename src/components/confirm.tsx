import { Component, ContextType} from "react";
import { CartContext } from "../context/CartContext";
import "../css/layout.css";
import { Result } from "antd";


interface State {
    confirmArray: any[],
    isLoading: boolean
}

export async function mockApi(personalInfo: any) {
    await timeOut()
    console.log("firstname: "+ personalInfo[0].value)
    console.log("lastname: " + personalInfo[1].value)
    console.log("email: " + personalInfo[2].value)
    console.log("phone: " + personalInfo[3].value)
    console.log("adress: " + personalInfo[4].value)


    return true
}

async function timeOut() {
    return new Promise(resolve => setTimeout(resolve, 2000))
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

        this.context.cart = []
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
                    confirmArray.map((item) => ( 
                        
                        <div className="flex centerY centerX">
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
