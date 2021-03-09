import React, { Component } from "react";
import Header from "./Header";
import Main from "./main"

import  "../css/layout.css"
import { Footer } from "antd/lib/layout/layout";
import { Route, Switch } from "react-router";

class Layout extends Component {

    render() {
        return (
            <div className="flex-col">
                <Header />

                <Switch>
                    <Route path="/">
                        <Main />
                    </Route>
                    <Route path="/shop">
                        <h1>SHOP</h1>
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