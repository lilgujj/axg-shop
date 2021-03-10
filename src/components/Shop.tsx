import React, { Component } from "react";
import "../css/shop.css";
import "../css/layout.css";
import ProductCard from "./ProductCard";
import shopImg from "../images/shop-img.jpg";
import { Link,  Route,  Switch, } from "react-router-dom";
import ProductItem from "./ProductItem";
import { DataContext } from '../context/DatabaseContext';

class Shop extends Component {

    static contextType = DataContext;
    context!: React.ContextType<typeof DataContext>

        render() {
            
            const products = this.context.products
 
        return(
            <>
                <img className="imageBack" src={shopImg} alt=""/>
                <h1 style={{ textAlign: 'center', marginTop: '30rem' }}>Shop</h1>
                <div className="shopContainer flex centerY centerX">
                    <Switch>
                        <Route exact path="/shop">
                                {
                                    products.map(item => (
                                        <div className="shopItems flex centerY centerX">
                                            <Link to={`shop/product/${item.productName}`}>
                                                <ProductCard title={item.productName} description={item.price} key={item.id} img={item.img} />
                                            </Link>
                                        </div>
                                    ))
                                }
                        </Route>
                        <Route exact path="/shop/product/:id">
                            <ProductItem allProducts={products}/>
                        </Route>
                            
                    </Switch>
                </div>
            </>
        )

        
        }
        
}

export default Shop;