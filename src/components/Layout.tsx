import React, { Component } from "react";
import Header from "./Header";
import Main from "./main"

import  "../css/layout.css"
import { Footer } from "antd/lib/layout/layout";
import { Route, Switch } from "react-router";
import Shop from "./Shop";
import ShoppingCartSidebar from './ShoppingCartSidebar'
import CheckOut from "./checkOut";


class Layout extends Component {

    render() {

        // console.log(this.state)
        return (
            <div className="flex-col">
                <Header />

                <Switch>
                    <Route exact path="/">
                        <Main />
                    </Route>
                    <Route path="/shop">
                        <Shop />
                    </Route>

                    <Route path="/checkout">
                        <CheckOut />
                    </Route>


                <Route path="/cart">
                <ShoppingCartSidebar />
                </Route>
                </Switch>
                <Footer style={{textAlign: "center"}}>
                    Anton X Gustav <br />clothing
                </Footer>
            </div>

        )
    }
}

export default Layout;