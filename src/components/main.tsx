import React, { Component} from "react";
import "../css/main.css";
import "../css/layout.css"
import { Carousel } from 'antd';

import mainMan from "../images/mainMan.jpg"
import glasses1 from "../images/glasses1.jpg"
import keps1 from "../images/keps1.jpg"
import klocka1 from "../images/klocka1.jpg"
import glasses3 from "../images/glasses3.jpg"
import { Link } from "react-router-dom";
class Main extends Component {




    render() {
        return (
            <>
                <img className="imageBg" src={mainMan} alt="" />

                <div className="flex centerX centerY column axgTitle">
                    <h1 className="flex centerY h1Main">A <span className="mainXLogo">X</span> G</h1>
                    <p>Clothing shop</p>

                </div>

                <div className="newsContainer">
                    <div className="newReleases">
                        <h2>New releases</h2>
                    </div>
                <Carousel autoplay style={{zIndex: 100}} >
                    <Link to="/shop/product/Pink%20Lady%20Glasses">
                        <div className="textHover flex centerX" >
                            <h3 className="textStyle"> Show More info</h3>
                            <img className="contentStyle" src={glasses3} alt="" />
                        </div>
                    </Link>
                    <Link to="/shop/product/Green%20Goblin%20Glasses">
                        <div className="textHover flex centerX">
                            <h3 className="textStyle"> Show More info</h3>
                            <img className="contentStyle" src={glasses1} alt="" />
                        </div>
                    </Link>
                    <Link to="/shop/product/LA%20Snapback">
                        <div className="textHover flex centerX">
                            <h3 className="textStyle"> Show More info</h3>
                            <img className="contentStyle" src={keps1} alt="" />
                        </div>
                    </Link>
                    <Link to="/shop/product/Edifice">
                        <div className="textHover flex centerX">
                            <h3 className="textStyle"> Show More info</h3>
                            <img className="contentStyle" src={klocka1} alt="" />
                        </div>
                    </Link>
                </Carousel>
                </div>
            </>
        );
    }
}


export default Main;