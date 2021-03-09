import React, { Component } from "react";
import Header from "./Header";
import Main from "./main"

import  "../css/layout.css"
import { Footer } from "antd/lib/layout/layout";

class Layout extends Component {

    render() {
        return (
            <div className="flex-col">
                <Header />
                <Main />
                <Footer>
                    hejhjehje
                </Footer>
            </div>

        )
    }
}

export default Layout;