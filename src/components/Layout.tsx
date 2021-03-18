import React, { Component } from "react";
import Header from "./Header";
import Main from "./main"

import  "../css/layout.css"
import { Footer } from "antd/lib/layout/layout";
import { Route, Switch } from "react-router";
import Shop from "./Shop";
import ShoppingCartSidebar from './Cart';
import CheckOut from "./checkOut";
import Confirm from "./confirm";

class Layout extends Component {

    render() {

        // console.log(this.state)
        return (
            <div className="flex-col" style={{ minHeight: '100%' }}>
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
                    <Route path="/confirm">
                      <Confirm />
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