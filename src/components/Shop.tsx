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


function Shop() {

   const database = [
       {
           productName: 'Green Goblin Glasses',
           price: 399,
           id: 1,
           img: sunglass1
       },
       {
           productName: 'Pink Lady Glasses',
           price: 299,
           id: 2,
           img: sunglass3
       },
       {
           productName: 'LA Snapback',
           price: 299,
           id: 3,
           img: keps1
       },
       {
           productName: 'Nike Snapback',
           price: 299,
           id: 4,
           img: keps2
       },
       {
           productName: 'Edifice',
           price: 1299,
           id: 5,
           img: klocka1
       },
       {
           productName: 'Maurice De Mauriac',
           price: 1899,
           id: 6,
           img: klocka2
       },

   ]

    let { path, url } = useRouteMatch();

        return(
            <>
            <img className="imageBack" src={shopImg} alt=""/>
            <h1 style={{ textAlign: 'center', marginTop: '30rem' }}>Shop</h1>
            {/* <div className="shopContainer flex-col centerY centerX"> */}
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
                    <Route path={`${path}/${database[0].productName}`}>
                        <div className="shopItems flex centerY centerX">
                            <div>
                                <img className="produktImage" src={sunglass1} alt=""/>
                            </div>
                            <div className="flex-col p2">
                                    <p>Green Gob Glasses</p>
                                    <p>Embrace the sun with these rounded handmade sunglasses with green theme</p>
                                    <p>Price: 399kr</p>
                                <div>
                                    <Button style={{margin: ".5rem"}}>Buy Now</Button>
                                    <Link to="/shop">
                                        <Button style={{margin: ".5rem"}}>Go back</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Route>
                    <Route path={`${path}/${database[1].productName}`}>
                        <div className="shopItems flex centerY centerX">
                            <div>
                                <img className="produktImage" src={sunglass1} alt=""/>
                            </div>
                            <div className="flex-col p2">
                                    <p>{database[1].productName}</p>
                                    <p>Embrace the sun with these rounded handmade sunglasses with green theme</p>
                                    <p>Price: 399kr</p>
                                <div>
                                    <Button style={{margin: ".5rem"}}>Buy Now</Button>
                                    <Link to="/shop">
                                        <Button style={{margin: ".5rem"}}>Go back</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Route>
                </Switch>
            {/* </div> */}
            </>
        )
    
}


export default Shop;