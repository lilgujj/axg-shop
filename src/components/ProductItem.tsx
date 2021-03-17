import { Button } from "antd"
import { Component, ContextType, } from "react"
import { Link, RouteComponentProps, withRouter } from "react-router-dom"
import { CartContext } from "../context/CartContext"

import "../css/layout.css"
import "../css/shop.css"
import { products } from "../products"



interface Props extends RouteComponentProps<{ id: string }> {}

class ProductItem extends Component<Props> {
    context!: ContextType<typeof CartContext>
    static contextType = CartContext;


    
    render(){
        const product = products.find((p) =>
            p.productName === this.props.match.params.id)

        if (!product) {
            return "Tyvärr har du besökt en produkt som inte finns."
        }

        return  (
            <div className="shopItems flex centerY centerX">
                <div>
                    <img className={"produktImage"} src={product?.img} alt=""/>
                </div>
                <div className="flex-col p2">
                        <p>{product?.productName}</p>
                        <p>{product?.description}</p>
                        <p>{product?.price}kr</p>
                    <div>


                    {/* {
                    this.context.products.map(product => <Button onClick={() => this.context.addToCart(product)}>{product}</Button>)
                    } */}
                        <Button onClick={() => this.context.addToCart(product.productName)} style={{margin: ".5rem"}}>Buy Now</Button>
                        <Link to="/shop">
                            <Button style={{margin: ".5rem"}}>Other Products</Button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}




export default withRouter(ProductItem);