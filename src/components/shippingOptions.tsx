import { Component, ContextType } from "react";
import { CartContext } from "../context/CartContext";
import "../css/layout.css";

interface Props {
    name: string,
    price: number,
    time: string,
}

class ShippingOptions extends Component<Props> {
    context!: ContextType<typeof CartContext>;
    static contextType = CartContext;

    render() {
        const cart = this.context

        return (
          <div className="flex centerY centerX" style={{ width: "40%" }}>
            <div className="flex-col centerY centerX">
              <div className="flex">
                <h4 style={{ marginRight: ".5rem" }}>Leverantör:</h4>
                <h4> {this.props.name}</h4>
              </div>
              <div className="flex">
                <h4 style={{ marginRight: ".5rem" }}>Leveranstid: </h4>
                <h4> {this.props.time}</h4>
              </div>
              <div className="flex">
                <h4 style={{ marginRight: ".5rem" }}>Leveranspris: </h4>
                <h4>{this.props.price}kr</h4>
              </div>
              <div className="flex">
                <h4 style={{ marginRight: ".5rem" }}>Moms:</h4>
                <h4>{cart.total * 0.25}kr</h4>
              </div>
              <div className="flex">
                <h4 style={{ marginRight: ".5rem" }}>Total: </h4>
                <h4 style={{ color: "red" }}>
                  {" "}
                  {cart.total + this.props.price}kr
                </h4>
              </div>
            </div>
          </div>
        );
    }
}

export default ShippingOptions;
