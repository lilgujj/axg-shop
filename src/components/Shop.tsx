import { Component } from "react";
import "../css/shop.css";
import "../css/layout.css";

// images
import ProductCard from "./ProductCard";
import shopImg from "../images/shop-img.jpg";
import sunglass1 from "../images/glasses1.jpg";
import sunglass3 from "../images/glasses3.jpg";
import keps1 from "../images/keps1.jpg";
import keps2 from "../images/keps2.jpg";
import klocka1 from "../images/klocka1.jpg";
import klocka2 from "../images/klocka2.jpg";


class Shop extends Component {

    render() {

        return(
            <>
            <img className="imageBack" src={shopImg} alt=""/>
            <div className="shopContainer flex-col centerY centerX">
                <div>
                    <h1>Shop</h1>
                </div>
                <div className="shopItems flex centerY centerX">
                    <ProductCard title="Green Gob Glasses" description="399kr" img={sunglass1} />
                    <ProductCard title="Pink Lady Glasses" description="249kr" img={sunglass3} />
                    <ProductCard title="LA Snapback" description="299kr" img={keps1} />
                    <ProductCard title="Nike Snapback" description="299kr" img={keps2} />
                    <ProductCard title="Edifice" description="1299kr" img={klocka1} />
                    <ProductCard title="Maurice De Mauriac" description="1899kr" img={klocka2} />
                </div>
            </div>
            </>
        )
    }
}


export default Shop;