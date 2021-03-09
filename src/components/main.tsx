import { Component, CSSProperties} from "react";
import "../css/main.css";
import "../css/layout.css"
import mainMan from "../images/mainMan.jpg"
import { AutoComplete, Carousel } from 'antd';

class Main extends Component {




    render() {
        return (
            <>
                <img className="imageBg" src={mainMan} alt="" />
                <h1 className="flex centerX centerY axgTitle">
                    aXg Cloting Brand
                </h1>

                <div className="newsContainer">
                    <div className="newReleases">
                        <h2>New releases</h2>
                    </div>
                <Carousel autoplay>
                    <div>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>
                </div>
            </>
        );
    }
}


const contentStyle: CSSProperties = {
    height: '20rem',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    width: '80%',
    margin: "auto",
  };

export default Main;