import React, { Component } from "react";
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
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { Button } from "antd";
import ProductItem from "./ProductItem";


function Shop() {

   const database = [
       {
           productName: 'Green Goblin Glasses',
           price: 399,
           id: 1,
           img: sunglass1,
           description: "Green handmade glasses from Sweden. Dark green opacity makes u feel one with nature"
       },
       {
           productName: 'Pink Lady Glasses',
           price: 299,
           id: 2,
           img: sunglass3,
           description: "Pink handmade glasses from Sweden. Soft pink opacity put your eyes in comfort zone"
       },
       {
           productName: 'LA Snapback',
           price: 299,
           id: 3,
           img: keps1,
           description: "LA Snapback. unisex and all fit"
       },
       {
           productName: 'Nike Snapback',
           price: 299,
           id: 4,
           img: keps2,
           description: "Nike Snapback. unisex and all fit"
       },
       {
           productName: 'Edifice',
           price: 1299,
           id: 5,
           img: klocka1,
           description: "Edifice watch water resistant 100m with rose/black design"
       },
       {
           productName: 'Maurice De Mauriac',
           price: 1899,
           id: 6,
           img: klocka2,
           description: "Maurice De Mauriac watch with date and timer functions to keep you updated."
       },

   ]

    let { path, url } = useRouteMatch();

        return(
            <>
            <img className="imageBack" src={shopImg} alt=""/>
            <h1 style={{ textAlign: 'center', marginTop: '30rem' }}>Shop</h1>
                <Switch>
                    <Route exact path="/shop">
                        <div className="shopContainer flex centerY centerX">
                        {
                            database.map(item => (
                                <div className="shopItems flex centerY centerX">
                                    <Link to={`${url}/${item.productName}`}>
                                        <ProductCard title={item.productName} description={item.price} key={item.id} img={item.img} />
                                    </Link>
                                </div>
                            ))
                        }
                        </div>
                    </Route>
                    <div className="shopContainer flex centerY centerX">
                        {
                            database.map((item, i) => (
                                <Route path={`${path}/${database[i].productName}`}>
                                    <ProductItem productName={item.productName} price={item.price} id={item.id} img={item.img} description={item.description} />
                                </Route>

                            ))
                        }
                    </div>
                </Switch>
            </>
        )
    
}

export default Shop;