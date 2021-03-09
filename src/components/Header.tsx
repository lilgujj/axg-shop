import React, { Component } from "react";
import '../css/headerStyle.css';
import '../css/layout.css';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import {Link } from "react-router-dom";

class Header extends Component {
    
    render() {
        return(

            <nav className="flex centerX centerY">
                <div className="flex space-between centerY nav-div">
                    <Link to="/">
                        <h1>A <span>X</span> G</h1>
                    </Link>

                <div>
                    <Link to='/shop'>
                        Shop
                    </Link>
                    
                    <Link to='/shop'>
                        About
                    </Link>
                    
                    <Link to='/shop'>
                        Contact
                    </Link>
                    

                </div>

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