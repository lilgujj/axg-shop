import { Component, ContextType } from "react";
import {CartContext} from "../context/CartContext";


interface Props {
    name: string,
    price: number,

}


class ShippingOptions extends Component<Props> {
    context!: ContextType<typeof CartContext>;
    static contextType = CartContext;
    

    

    render() {
        const cart = this.context

        return (
            <div className="flex-col centerY centerX">
                <h2>{this.props.name}</h2>
                <h2>{this.props.price}kr</h2>
                <p>{cart.total} + {this.props.price}kr</p>
                <h3 style={{ color: 'red' }}>Total: {cart.total + this.props.price}kr</h3>
                
            </div>
        );
        
    }
}

export default ShippingOptions;
