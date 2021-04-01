import React, { Component, CSSProperties } from "react";
import "../css/shop.css";
import "../css/layout.css";
import ProductCard from "./ProductCard";
import shopImg from "../images/shop-img.jpg";
import { Route, Switch, } from "react-router-dom";
import ProductItem from "./ProductItem";
import { ProductContext } from '../context/ProductContext';

class Shop extends Component {

    static contextType = ProductContext;
    context!: React.ContextType<typeof ProductContext>

    render() {

        return (
            <div>
                <img src={shopImg} alt="" style={imageBack} />
                <div className="flex column centerY centerX " style={shopTitle}>
                    <h1 className="shopH1">Shop</h1>
                </div>
                <div className="shopContainer flex centerY centerX" style={divRootStyle}>
                    <Switch>
                        <Route exact path="/shop">
                            {
                                this.context.products.map((item, index) => (
                                    <div key={index} className="shopItems flex centerY centerX">                       
                                        <ProductCard title={item.productName} description={item.price} key={item.id} img={item.img} />                                 
                                    </div>
                                ))
                            }
                        </Route>
                        <Route exact path="/shop/product/:id">
                            <ProductItem />
                        </Route>
                    </Switch>
                </div>
            </div>
        )
    }
}

const divRootStyle: CSSProperties = {
    width: "100%",
    flexWrap: "wrap",
    margin: "2rem 0",
    minHeight: "50vh",
}

const imageBack: CSSProperties = {
    position: "absolute",
    zIndex: -100,
    height: "35vh",
    width: "100%",
    objectFit: "cover",
    top: 0,
}

const shopTitle: CSSProperties = {
    width: "100%",
    height: "35vh",
    color: "white"
}

export default Shop;