import { Button } from "antd"
import { Component } from "react"
import { Link } from "react-router-dom"

import "../css/layout.css"
import "../css/shop.css"


interface Props {
    productName: String,
    price: Number,
    id: Number,
    img: any,
    description: String,
}

class ProductItem extends Component<Props> {

    render(){
        return  (
            <div className="shopItems flex centerY centerX">
                <div>
                    <img className={"produktImage"} src={this.props.img} alt=""/>
                </div>
                <div className="flex-col p2">
                        <p>{this.props.productName}</p>
                        <p>{this.props.description}</p>
                        <p>{this.props.price}kr</p>
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

export default ProductItem