import React, { Component, CSSProperties } from "react";
import "../css/shop.css";
import "../css/layout.css";
import ProductCard from "./ProductCard";
import shopImg from "../images/shop-img.jpg";
import { Link,  Route,  Switch, } from "react-router-dom";
import ProductItem from "./ProductItem";
import { ProductContext } from '../context/ProductContext';

class Shop extends Component {

    static contextType = ProductContext;
    context!: React.ContextType<typeof ProductContext>

        render() {
 
        return(
            <div>
                <img className="imageBack" src={shopImg} alt=""/>
                <div className="flex column centerY centerX shopTitle">
                    <h1 className="shopH1">Shop</h1>

                </div>
                <div className="shopContainer flex centerY centerX" style={divRootStyle}>
                    <Switch>
                        <Route exact path="/shop">
                            {
                                this.context.products.map((item, index) => (
                                    <div key={index} className="shopItems flex centerY centerX">
                                        <Link to={`shop/product/${item.productName}`}>
                                            <ProductCard title={item.productName} description={item.price} key={item.id} img={item.img} />
                                        </Link>
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

const divRootStyle: CSSProperties= {
    width: "100%",
    flexWrap: "wrap",
    margin: "2rem 0",
    minHeight: "50vh",
}

export default Shop;