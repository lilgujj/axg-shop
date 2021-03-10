import { Button } from "antd"
import { Component } from "react"
import { Link, RouteComponentProps, withRouter } from "react-router-dom"
import { Product } from "../context/DatabaseContext"

import "../css/layout.css"
import "../css/shop.css"



interface Props extends RouteComponentProps<{ id: string }> {
    allProducts: Product[]
}

class ProductItem extends Component<Props> {

    render(){
        const product = this.props.allProducts.find((p) =>
            p.productName == this.props.match.params.id)

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
                        <Button style={{margin: ".5rem"}}>Buy Now</Button>
                        <Link to="/shop">
                            <Button style={{margin: ".5rem"}}>Go back</Button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ProductItem);