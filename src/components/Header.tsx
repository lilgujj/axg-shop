import React, { Component } from "react";
import '../css/headerStyle.css';
import '../css/layout.css';
import { BarsOutlined, CloseOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import {Link } from "react-router-dom";
import { Badge } from 'antd'


interface Props {
    handleClick: () => void;
}

interface State {
    toggleNavbar: boolean
}
class Header extends Component<Props, State> {

    state: State = {
        toggleNavbar: false
    }


    menuToggle = () => {
        this.setState({
            toggleNavbar: !this.state.toggleNavbar
        })
    }
    
    render() {

        const {toggleNavbar} = this.state

        console.log(this.state)
        return(

            <nav className="flex centerX centerY">
                <div className="flex space-between centerY nav-div">
                    <div className="menu">
                        <BarsOutlined onClick={this.menuToggle} style={{ fontSize: '2rem' }}/>
                    </div>

                    

                    <Link className="linkStyle" to="/">
                        <h1 className="flex centerY"id="h1">A <span className="headerSpan">X</span> G</h1>
                    </Link>
                    

               
                    <ul id="ul" className={toggleNavbar ?  "toggle" : "" } > {/* Lägger till klassen toggle ifall this.state: true annars this.state: false och toggle tas bort*/}
                        <li>
                            <Link onClick={this.menuToggle} className="linkStyle links" to='/'>
                                Home
                            </Link>
                            </li>
                        <li>
                            <Link onClick={this.menuToggle} className="linkStyle links"to='/shop'>
                                Shop
                            </Link>

                        </li>
                        <li>
                            <Link onClick={this.menuToggle} className="linkStyle links"to='/shop'>
                                About
                            </Link>

                        </li>
                        <li>
                            <Link onClick={this.menuToggle} className="linkStyle links"to='/shop'>
                                Contact
                            </Link>

                        </li>
                    <div className="close">
                        <CloseOutlined onClick={this.menuToggle} style={{ fontSize: '2rem' }}/>

                    </div>
                    </ul>

                    
                   
                    

                

                    <div className="flex">
                        <div style={{ marginRight: '1rem' }}>
                            <Badge count={0} showZero >
                                <ShoppingCartOutlined style={{fontSize: '2rem', color: 'white'}} onClick={this.props.handleClick}/>
                            </Badge>
                        </div>
                        <UserOutlined style={{fontSize: '2rem'}}/>

                    </div>

                </div>
            </nav>
        )
    }
}


export default Header;