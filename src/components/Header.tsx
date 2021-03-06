import { Component, ContextType } from "react";
import '../css/headerStyle.css';
import '../css/layout.css';
import axgLogo from "../images/axg-logo.png"
import { BarsOutlined, CloseOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { Badge } from 'antd';
import { CartContext } from "../context/CartContext"

interface State {
    toggleNavbar: boolean
    className: string
}
class Header extends Component<{}, State> {
    context!: ContextType<typeof CartContext>
    static contextType = CartContext;

    state: State = {
        toggleNavbar: false,
        className: ""
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        if (window.pageYOffset > 0) {
            if (!this.state.className) {
                this.setState({ className: "black" });
            }
        } else {
            if (this.state.className) {
                this.setState({ className: "" });
            }
        }
    }

    menuToggle = () => {
        this.setState({
            toggleNavbar: !this.state.toggleNavbar
        })
    }

    render() {

        const { toggleNavbar } = this.state

        return (
            <CartContext.Consumer>
                {({ cart }) => {
                    return (
                        <nav className="flex centerX centerY" id={this.state.className}>
                            <div className="flex space-between centerY nav-div">
                                <div className="menu">
                                    <BarsOutlined onClick={this.menuToggle} style={{ fontSize: '2rem' }} />
                                </div>
                                <Link className="linkStyle" to="/">
                                    <img style={{ height: 'auto', width: '3rem' }} src={axgLogo} alt="" />
                                </Link>

                                <ul id="ul" className={toggleNavbar ? "toggle" : ""} > 
                                    <li>
                                        <Link onClick={this.menuToggle} className="linkStyle links" to='/'>
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={this.menuToggle} className="linkStyle links" to='/shop'>
                                            Shop
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={this.menuToggle} className="linkStyle links" to='/about'>
                                            About
                                        </Link>
                                    </li>
                                    <div className="close">
                                        <CloseOutlined onClick={this.menuToggle} style={{ fontSize: '2rem' }} />
                                    </div>
                                </ul>

                                <div className="flex">
                                    <div style={{ marginRight: '1rem' }}>
                                        <Link to='/cart'>
                                            <Badge count={cart.length} showZero>
                                                <ShoppingCartOutlined style={{ fontSize: '2rem', color: 'white' }} />
                                            </Badge>
                                        </Link>
                                    </div>
                                    <Link to="/admin" style={{ color: 'white' }}>
                                        <UserOutlined style={{ fontSize: '2rem' }} />
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    )
                }}
            </CartContext.Consumer>
        )
    }
}

export default Header;