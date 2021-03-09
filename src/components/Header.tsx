import React, { Component } from "react";
import '../css/headerStyle.css';
import '../css/layout.css';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';

class Header extends Component {
    
    render() {
        return(
            <nav className="flex centerX centerY">
                <div className="flex space-between centerY nav-div">

                    <h1>A <span>X</span> G</h1>

                    <div>
                        <ShoppingCartOutlined style={{fontSize: '2rem', marginRight: '.5rem'}}/>
                        <UserOutlined style={{fontSize: '2rem'}}/>

                    </div>

                </div>
            </nav>
        )
    }
}


export default Header;