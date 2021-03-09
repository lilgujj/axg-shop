import React, { Component } from "react";
import '../css/headerStyle.css';
import '../css/layout.css';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import {Link } from "react-router-dom";


interface Props {
    handleClick: () => void;
}
class Header extends Component<Props> {
    
    render() {
        return(

            <nav className="flex centerX centerY">
                <div className="flex space-between centerY nav-div">
                    <Link className="linkStyle" to="/">
                        <h1 id="h1">A <span>X</span> G</h1>
                    </Link>

                <div>
                    <Link className="linkStyle"to='/shop'>
                        Shop
                    </Link>
                    
                    <Link className="linkStyle"to='/shop'>
                        About
                    </Link>
                    
                    <Link className="linkStyle"to='/shop'>
                        Contact
                    </Link>
                    

                </div>

                    <div>
                        <ShoppingCartOutlined style={{fontSize: '2rem', marginRight: '.5rem'}} onClick={this.props.handleClick}/>
                        <UserOutlined style={{fontSize: '2rem'}}/>

                    </div>

                </div>
            </nav>
        )
    }
}


export default Header;